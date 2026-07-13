/** Shared Framer Motion presets — smooth, premium easing */
export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Play once when entering view — replaying on every scroll tanks mobile FPS */
export const viewportOnce = { once: true, amount: 0.12 as const };

/** Prefer opacity-only motion so enter animations don't fight finger scrolling */
export const fadeUp = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: viewportOnce,
  transition: { duration: 0.5, ease: easeOut },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: viewportOnce,
  transition: { duration: 0.45, ease: easeOut },
};

export const riseIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: viewportOnce,
  transition: { duration: 0.55, ease: easeOut },
};
