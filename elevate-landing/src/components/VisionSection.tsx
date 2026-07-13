import { motion } from 'framer-motion';
import { easeOut } from '../motion';
import BookAppointmentButton from './BookAppointmentButton';
import './VisionSection.css';

export default function VisionSection() {
  return (
    <section id="vision" className="vision section">
      <div className="section-inner vision__inner">
        <div className="vision__stage">
          <motion.h2
            className="vision__backdrop-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: easeOut }}
          >
            KINETIC VISION
            <br />
            FOR EVERY
            <br />
            LEARNER.
          </motion.h2>

          <motion.img
            className="vision__subject"
            src="/vision/subject.webp"
            alt="Learner experiencing Elevate kinetic curriculum through immersive visualization"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: easeOut }}
            loading="lazy"
            decoding="async"
          />
        </div>

        <BookAppointmentButton className="vision__book" />
      </div>
    </section>
  );
}
