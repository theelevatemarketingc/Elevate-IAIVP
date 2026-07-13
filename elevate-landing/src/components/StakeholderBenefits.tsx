import { motion } from 'framer-motion';
import { easeOut, viewportOnce } from '../motion';
import './StakeholderBenefits.css';

const layers = [
  {
    src: '/benefits/layer-01.webp',
    alt: 'Medical student exploring a visual heart learning module on a tablet',
    title: 'Understand Complex Subjects',
    subtitle:
      'Advanced visual learning modules help students understand concepts through a lens they have never seen before.',
  },
  {
    src: '/benefits/layer-02.webp',
    alt: 'Faculty reviewing course materials for stronger retention',
    title: 'Retain Information Better',
    subtitle: 'Real examples help imprint concepts into the memory of students.',
  },
  {
    src: '/benefits/layer-03.webp',
    alt: 'Learner catching up on missed classes with visual content',
    title: 'Catch Up on Missed Classes',
    subtitle: 'Missed classes cause students to lose ground on subjects — but not anymore.',
  },
];

export default function StakeholderBenefits() {
  return (
    <section id="benefits" className="benefits section">
      <div className="section-inner">
        <motion.p
          className="eyebrow benefits__eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          Real World Advantages
        </motion.p>
        <motion.h2
          className="benefits__title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          BUILT WITH STUDENT IN MIND
        </motion.h2>

        <div className="benefits__grid">
          {layers.map((layer, i) => (
            <motion.figure
              key={layer.src}
              className="benefits__figure"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: i * 0.08,
                ease: easeOut,
              }}
            >
              <img src={layer.src} alt={layer.alt} className="benefits__img" loading="lazy" decoding="async" />
              <figcaption className="benefits__caption">
                <span className="benefits__caption-title">{layer.title}</span>
                <span className="benefits__caption-sub">{layer.subtitle}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
