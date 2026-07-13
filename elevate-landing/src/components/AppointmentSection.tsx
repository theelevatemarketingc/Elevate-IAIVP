import { motion } from 'framer-motion';
import './AppointmentSection.css';

export default function AppointmentSection() {
  return (
    <section id="appointment" className="appointment section">
      <div className="section-inner appointment__inner">
        <motion.div
          className="appointment__media"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/appointment/consult.webp"
            alt="Institutional consultation meeting"
            className="appointment__img"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}
