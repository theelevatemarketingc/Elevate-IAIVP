import { motion } from 'framer-motion';
import { easeOut, viewportOnce } from '../motion';
import ShatterImage from './ShatterImage';
import './EfficiencyProof.css';

export default function EfficiencyProof() {
  return (
    <section id="proof" className="proof section">
      <div className="proof__hotspot" aria-hidden="true" />

      <div className="section-inner">
        <motion.p
          className="eyebrow proof__eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          The Efficiency Proof Engine
        </motion.p>
        <motion.h2
          className="proof__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          COST &amp; TIME SAVINGS, QUANTIFIED.
        </motion.h2>

        <div className="proof__split">
          <motion.div
            className="proof__panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <div className="proof__callout">
              <span className="proof__number">70%</span>
              <span className="proof__number-label">Time Reduction</span>
            </div>

            <ShatterImage src="/proof/clock.webp" alt="Analog clock representing time savings" aspect="1 / 1.05" />

            <p className="proof__axis-title">PRODUCTION TIMELINE &mdash; TRADITIONAL VS. ELEVATE</p>
          </motion.div>

          <motion.div
            className="proof__panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, ease: easeOut, delay: 0.08 }}
          >
            <div className="proof__callout">
              <span className="proof__number">Fraction of</span>
              <span className="proof__number-label">The Cost</span>
            </div>

            <ShatterImage src="/proof/money.webp" alt="Money stack representing cost reduction" aspect="1.7 / 1" />

            <p className="proof__axis-title">PER-COURSE PRODUCTION SPEND (NORMALIZED)</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
