import { motion } from 'framer-motion';
import { easeOut } from '../motion';

const PIECES = [
  { id: 'left', pos: '0% 50%', endX: -28, endY: -4, endRot: -8 },
  { id: 'right', pos: '100% 50%', endX: 28, endY: 4, endRot: 8 },
] as const;

export default function ShatterImage({
  src,
  alt,
  aspect = '1 / 1',
}: {
  src: string;
  alt: string;
  aspect?: string;
}) {
  return (
    <div
      className="shatter"
      role="img"
      aria-label={alt}
      style={{ aspectRatio: aspect }}
    >
      {PIECES.map((piece, i) => (
        <motion.div
          key={piece.id}
          className="shatter__piece"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: piece.pos,
          }}
          initial={{ x: 0, y: 0, rotate: 0 }}
          whileInView={{
            x: piece.endX,
            y: piece.endY,
            rotate: piece.endRot,
          }}
          viewport={{ once: false, amount: 0.4, margin: '0px 0px -10% 0px' }}
          transition={{
            duration: 0.7,
            ease: easeOut,
            delay: i * 0.04,
          }}
        />
      ))}
    </div>
  );
}
