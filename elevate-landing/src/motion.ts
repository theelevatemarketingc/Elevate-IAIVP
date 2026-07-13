/** Shared Framer Motion presets — smooth, premium easing */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = { once: false, amount: 0.2 as const };

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
  transition: { duration: 0.7, ease: easeOut },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: viewportOnce,
  transition: { duration: 0.6, ease: easeOut },
};

export const riseIn = {
  initial: { opacity: 0, y: 56 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.25 },
  transition: { duration: 0.8, ease: easeOut },
};
