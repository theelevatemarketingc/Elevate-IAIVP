import { teardropPath } from '../utils/teardrop';

export interface EmberShapeProps {
  id: string;
  headX: number;
  headY: number;
  headR: number;
  tail?: { x: number; y: number };
  sweep?: 0 | 1;
  core?: string;
  mid?: string;
  deep?: string;
  haloOpacity?: number;
  coreOpacity?: number;
}

const VIEW_W = 683;
const VIEW_H = 1024;

export default function EmberShape({
  id,
  headX,
  headY,
  headR,
  tail,
  sweep = 1,
  core = '#ff3b3f',
  mid = '#c4102f',
  deep = '#4a0e17',
  haloOpacity = 0.55,
  coreOpacity = 0.9,
}: EmberShapeProps) {
  const d = tail
    ? teardropPath(headX, headY, headR, tail.x, tail.y, sweep)
    : `M ${headX - headR},${headY} a ${headR},${headR} 0 1 0 ${headR * 2},0 a ${headR},${headR} 0 1 0 ${-headR * 2},0 Z`;

  const gradId = `grad-${id}`;
  const haloGradId = `halo-${id}`;
  const blurId = `blur-${id}`;
  const haloBlurId = `haloblur-${id}`;
  const gradR = headR * 1.7;

  // Extend the gradient axis slightly past the tail tip so the fade
  // completes smoothly instead of clipping abruptly at the point.
  const gx2 = tail ? headX + (tail.x - headX) * 1.18 : headX;
  const gy2 = tail ? headY + (tail.y - headY) * 1.18 : headY;

  const stops = (
    <>
      <stop offset="0%" stopColor={core} stopOpacity="0.95" />
      <stop offset="22%" stopColor={mid} stopOpacity="0.8" />
      <stop offset="48%" stopColor={deep} stopOpacity="0.5" />
      <stop offset="76%" stopColor={deep} stopOpacity="0.12" />
      <stop offset="100%" stopColor={deep} stopOpacity="0" />
    </>
  );

  const haloStops = (
    <>
      <stop offset="0%" stopColor={core} stopOpacity="0.55" />
      <stop offset="20%" stopColor={mid} stopOpacity="0.4" />
      <stop offset="50%" stopColor={deep} stopOpacity="0.22" />
      <stop offset="78%" stopColor={deep} stopOpacity="0.06" />
      <stop offset="100%" stopColor={deep} stopOpacity="0" />
    </>
  );

  return (
    <svg
      className="ember-svg"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {tail ? (
          <>
            <linearGradient id={haloGradId} x1={headX} y1={headY} x2={gx2} y2={gy2} gradientUnits="userSpaceOnUse">
              {haloStops}
            </linearGradient>
            <linearGradient id={gradId} x1={headX} y1={headY} x2={gx2} y2={gy2} gradientUnits="userSpaceOnUse">
              {stops}
            </linearGradient>
          </>
        ) : (
          <>
            <radialGradient id={haloGradId} cx={headX} cy={headY} r={gradR * 1.9} gradientUnits="userSpaceOnUse">
              {haloStops}
            </radialGradient>
            <radialGradient id={gradId} cx={headX} cy={headY} r={gradR} gradientUnits="userSpaceOnUse">
              {stops}
            </radialGradient>
          </>
        )}
        <filter id={haloBlurId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
        <filter id={blurId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>
      <path d={d} fill={`url(#${haloGradId})`} opacity={haloOpacity} filter={`url(#${haloBlurId})`} />
      <path d={d} fill={`url(#${gradId})`} opacity={coreOpacity} filter={`url(#${blurId})`} />
    </svg>
  );
}
