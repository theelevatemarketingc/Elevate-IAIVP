import { motion } from 'framer-motion';
import { easeOut } from '../motion';
import './PlatformSection.css';

export default function PlatformSection() {
  return (
    <section id="platform" className="platform section">
      <div className="section-inner platform__inner">
        <div className="platform__stage">
          <motion.div
            className="platform__visual"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: easeOut }}
          >
            <img
              src="/platform/hologram.webp?v=6"
              alt="Elevate kinetic curriculum hologram"
              className="platform__img"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <div className="platform__title-wrap">
            <motion.h2
              className="platform__title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
            >
              CURRICULUM,
              <br />
              PROJECTED INTO MOTION.
            </motion.h2>
          </div>

          <motion.a
            href="#pipeline"
            className="platform__link"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.15, ease: easeOut }}
          >
            See how the pipeline works
            <span aria-hidden="true">→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
