import { motion } from 'framer-motion';
import { easeOut } from '../motion';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="hero__meta hero__meta--tl">[ VISUAL LEARNING MODULES ]</div>
      <div className="hero__meta hero__meta--tr">[ EST. 2026 ]</div>

      <div className="hero__content section-inner">
        <div className="hero__orbit-wrap" aria-hidden="true">
          <span className="orbit-ring hero__ring hero__ring--1" />
          <span className="orbit-ring hero__ring hero__ring--2" />
          <span className="hero__ring-dot" />
        </div>

        <motion.p
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          Institutional Visual Intelligence
        </motion.p>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.08, ease: easeOut }}
        >
          VISUALIZE
          <br />
          YOUR SYLLABUS.
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: easeOut }}
        >
          Convert entire curricula into cinematic animation &amp; motion graphics.
          At a fraction of the time and cost
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.34, ease: easeOut }}
          className="hero__cta-wrap"
        >
          <a
            href="https://calendly.com/theelevatemarketingco/30min"
            className="glass-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.assign('https://calendly.com/theelevatemarketingco/30min');
            }}
          >
            Book an Appointment
            <span className="glass-btn__arrow">→</span>
          </a>
        </motion.div>
      </div>

      <div className="hero__meta hero__meta--bl">[ SCROLL TO EXPLORE ]</div>
      <div className="hero__meta hero__meta--br">[ SYLLABUS.MP4/MOTION ]</div>
    </section>
  );
}
