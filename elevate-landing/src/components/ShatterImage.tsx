import { useEffect, useRef, useState } from 'react';

const PIECES = [
  { id: 'left', pos: '0% 50%', side: 'left' as const },
  { id: 'right', pos: '100% 50%', side: 'right' as const },
];

export default function ShatterImage({
  src,
  alt,
  aspect = '1 / 1',
}: {
  src: string;
  alt: string;
  aspect?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [split, setSplit] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSplit(true);
          io.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -8% 0px' },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`shatter${split ? ' shatter--split' : ''}`}
      role="img"
      aria-label={alt}
      style={{ aspectRatio: aspect }}
    >
      {PIECES.map((piece) => (
        <div
          key={piece.id}
          className={`shatter__piece shatter__piece--${piece.side}`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: piece.pos,
          }}
        />
      ))}
    </div>
  );
}
