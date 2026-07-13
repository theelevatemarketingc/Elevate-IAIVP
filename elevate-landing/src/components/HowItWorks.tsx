import { motion } from 'framer-motion';
import { easeOut, viewportOnce } from '../motion';
import './HowItWorks.css';

const steps = [
  {
    num: '01',
    label: '01/SYLLABUS REFINEMENT',
    desc: 'Our experts work with your faculty to produce the most refined and visual friendly version of the syllabus',
    image: '/pipeline/step-01-pdf.webp',
    alt: '3D PDF document icon',
  },
  {
    num: '02',
    label: '02/ VISUAL ANALYSIS',
    desc: 'Advanced analysis to breakdown curriculum into the most efficient & effective visual modules',
    image: '/pipeline/step-02-analysis.webp',
    alt: 'PDF linked to anatomical organs for neural analysis',
  },
  {
    num: '03',
    label: '03/ Production',
    desc: 'Every module produced using stunning animation and motion graphics by our team',
    image: '/pipeline/step-03-heart.webp',
    alt: '3D heart rendered on a tablet display',
  },
];

export default function HowItWorks() {
  return (
    <section id="pipeline" className="pipeline section pipeline--after-hero">
      <div className="pipeline__trail" aria-hidden="true" />

      <div className="section-inner">
        <motion.p
          className="eyebrow pipeline__eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          The Automated Pipeline
        </motion.p>
        <motion.h2
          className="pipeline__title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          FROM DOCUMENT TO MOTION.
        </motion.h2>

        <div className="pipeline__chain">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="pipeline__card crystal-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, delay: i * 0.1, ease: easeOut }}
            >
              <div className="pipeline__visual">
                <img src={step.image} alt={step.alt} className="pipeline__img" loading="lazy" decoding="async" />
              </div>
              <h3 className="pipeline__label">{step.label}</h3>
              <p className="pipeline__desc">{step.desc}</p>
              {i < steps.length - 1 && <span className="pipeline__connector" aria-hidden="true" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
