const text =
  'Wedding Rings ✦ Engagement Rings ✦ Pendants ✦ Bracelets ✦ Necklaces ✦ Custom Fabrication ✦ Repair & Restoration ✦ Gold & Silver ✦ Transformation ✦';

export default function Marquee() {
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        <div className="marquee-item">
          {text.split(' ✦ ').map((item, i, arr) => (
            <span key={i}>
              {item}
              {i < arr.length - 1 && <span className="dot">✦</span>}
            </span>
          ))}
        </div>
        <div className="marquee-item" aria-hidden="true">
          {text.split(' ✦ ').map((item, i, arr) => (
            <span key={i}>
              {item}
              {i < arr.length - 1 && <span className="dot">✦</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
