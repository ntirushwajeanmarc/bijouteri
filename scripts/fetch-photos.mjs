import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const GALLERY_URL = 'https://photodeliver80.pixieset.com/bijouteriechalumeaudor/';
const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '../src/data/photos.json');
const FALLBACK = 'https://images.pixieset.com/471945711/6a09d90bdcf85db4f753787fc9b1006e-cover.jpg';

function normalizeUrl(url) {
  return url.replace(/^http:/, 'https:').split('?')[0];
}

function isGalleryPhoto(url) {
  return (
    url.includes('images.pixieset.com') &&
    /\.(jpg|jpeg|png|webp)/i.test(url) &&
    !/-thumb/i.test(url) &&
    !/-small/i.test(url)
  );
}

function collectFromPayload(data, urls) {
  if (!data) return;
  if (typeof data === 'string' && isGalleryPhoto(data)) {
    urls.add(normalizeUrl(data));
    return;
  }
  if (Array.isArray(data)) {
    data.forEach((item) => collectFromPayload(item, urls));
    return;
  }
  if (typeof data === 'object') {
    for (const [key, value] of Object.entries(data)) {
      if (['xxlarge', 'xlarge', 'large', 'medium', 'path', 'url', 'src'].includes(key)) {
        if (typeof value === 'string' && isGalleryPhoto(value)) {
          urls.add(normalizeUrl(value));
        }
      }
      collectFromPayload(value, urls);
    }
  }
}

async function fetchPhotos() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();
  const imageUrls = new Set();

  page.on('response', async (response) => {
    const url = response.url();
    if (isGalleryPhoto(url)) imageUrls.add(normalizeUrl(url));
    if (
      (url.includes('loadphotos') || url.includes('loadgallery') || url.includes('client/')) &&
      response.status() === 200
    ) {
      const contentType = response.headers()['content-type'] || '';
      if (contentType.includes('json')) {
        try {
          collectFromPayload(await response.json(), imageUrls);
        } catch {
          /* ignore */
        }
      }
    }
  });

  try {
    await page.goto(GALLERY_URL, { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(8000);

    for (const label of ['View Gallery', 'VIEW GALLERY', 'View gallery']) {
      const btn = page.getByText(label, { exact: false }).first();
      if (await btn.isVisible({ timeout: 3000 }).catch(() => false)) {
        await btn.click();
        await page.waitForTimeout(6000);
        break;
      }
    }

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(3000);

    for (let i = 0; i < 12; i++) {
      const loadMore = page.getByText(/load more/i).first();
      if (await loadMore.isVisible({ timeout: 2000 }).catch(() => false)) {
        await loadMore.click();
        await page.waitForTimeout(3000);
      } else {
        await page.evaluate(() => window.scrollBy(0, 800));
        await page.waitForTimeout(1500);
      }
    }

    const domImages = await page.$$eval('img', (imgs) =>
      imgs.map((img) => img.currentSrc || img.src).filter(Boolean),
    );
    domImages.filter(isGalleryPhoto).forEach((u) => imageUrls.add(normalizeUrl(u)));

    const bgImages = await page.evaluate(() => {
      const urls = [];
      document.querySelectorAll('[style*="images.pixieset.com"]').forEach((el) => {
        const match = el.getAttribute('style')?.match(/url\(["']?([^"')]+)["']?\)/);
        if (match) urls.push(match[1]);
      });
      return urls;
    });
    bgImages.filter(isGalleryPhoto).forEach((u) => imageUrls.add(normalizeUrl(u)));
  } catch (err) {
    console.warn('Partial fetch:', err.message);
  }

  await browser.close();

  const photos = [...imageUrls]
    .filter((u) => !u.endsWith('-cover.jpg') || imageUrls.size === 1)
    .sort();

  const payload = {
    galleryUrl: GALLERY_URL,
    fetchedAt: new Date().toISOString(),
    photos: photos.length ? photos : [FALLBACK],
  };

  writeFileSync(outPath, JSON.stringify(payload, null, 2));
  console.log(`Saved ${payload.photos.length} photos to ${outPath}`);
}

fetchPhotos().catch((err) => {
  console.error(err);
  process.exit(1);
});
