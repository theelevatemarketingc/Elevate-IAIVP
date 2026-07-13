/**
 * Builds an SVG path for an organic "comet/ember" shape: a rounded head
 * (circle) with a tapered tail reaching towards a distant point, formed by
 * the two tangent lines from that point to the circle plus the far-side arc.
 */
export function teardropPath(
  cx: number,
  cy: number,
  r: number,
  tailX: number,
  tailY: number,
  sweep: 0 | 1 = 1,
): string {
  const dx = tailX - cx;
  const dy = tailY - cy;
  const d = Math.max(Math.sqrt(dx * dx + dy * dy), r + 0.001);
  const theta = Math.atan2(dy, dx);
  const alpha = Math.acos(Math.min(1, r / d));

  const p1 = {
    x: cx + r * Math.cos(theta + alpha),
    y: cy + r * Math.sin(theta + alpha),
  };
  const p2 = {
    x: cx + r * Math.cos(theta - alpha),
    y: cy + r * Math.sin(theta - alpha),
  };

  return `M ${tailX} ${tailY} L ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${r} ${r} 0 1 ${sweep} ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} Z`;
}
