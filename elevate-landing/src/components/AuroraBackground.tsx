export default function AuroraBackground() {
  return (
    <div className="aurora-root" aria-hidden="true">
      <div className="aurora-image">
        <img
          src="/aurora-bg.webp"
          alt=""
          draggable={false}
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="aurora-vignette" />
    </div>
  );
}
