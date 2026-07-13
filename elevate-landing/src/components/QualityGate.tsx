import { motion } from 'framer-motion';
import { easeOut, viewportOnce } from '../motion';
import './QualityGate.css';

const gates = [
  {
    num: '01',
    title: 'Source Fidelity',
    desc: 'Every syllabus page is parsed and preserved — structure, outcomes, and pacing intact before motion begins.',
  },
  {
    num: '02',
    title: 'Learning Outcomes Mapped',
    desc: 'Each kinetic module is bound to institutional learning objectives for accreditation-ready traceability.',
  },
  {
    num: '03',
    title: 'Quality Control',
    desc: 'Faculty gets ability to verify all content before production',
  },
  {
    num: '04',
    title: 'LMS Package',
    desc: 'Final sequences ship as Canvas, Blackboard, and Moodle-ready packages, or even a custom LMS — zero manual rebuild.',
  },
];

export default function QualityGate() {
  return (
    <section id="quality-gate" className="qgate section">
      <div className="section-inner">
        <motion.p
          className="eyebrow qgate__eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          Compliance / Quality Gate
        </motion.p>
        <motion.h2
          className="qgate__title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          INSTITUTIONAL INFRASTRUCTURE,
          <br />
          NOT JUST ANIMATION.
        </motion.h2>
        <motion.p
          className="qgate__lead"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, delay: 0.06, ease: easeOut }}
        >
          Every deployment clears a four-stage inspection before it reaches your LMS.
        </motion.p>

        <div className="qgate__timeline">
          <div className="qgate__rail" aria-hidden="true" />

          {gates.map((gate, i) => (
            <motion.article
              key={gate.num}
              className="qgate__step"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: easeOut }}
            >
              <div className="qgate__marker">
                <span className="qgate__dot" />
                <span className="qgate__num">{gate.num}</span>
              </div>
              <div className="qgate__card">
                <h3 className="qgate__step-title">{gate.title}</h3>
                <p className="qgate__step-desc">{gate.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
