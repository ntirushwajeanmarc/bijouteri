import photosData from './photos.json';

export const GALLERY_URL = photosData.galleryUrl;
export const PHOTOS = photosData.photos.map(upgradePhotoQuality);

function upgradePhotoQuality(url) {
  return url
    .replace(/-medium\.(jpg|jpeg|png|webp)$/i, '-xlarge.$1')
    .replace(/-large\.(jpg|jpeg|png|webp)$/i, '-xlarge.$1');
}

export function getPhoto(index, fallback = null) {
  return PHOTOS[index] ?? fallback ?? PHOTOS[0] ?? null;
}

export function getCollectionPhotos() {
  if (PHOTOS.length >= 3) {
    return [PHOTOS[0], PHOTOS[1], PHOTOS[2]];
  }
  return PHOTOS.length ? PHOTOS : [null, null, null];
}
