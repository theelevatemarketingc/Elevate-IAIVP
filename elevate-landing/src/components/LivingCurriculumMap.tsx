import { useState } from 'react';
import { motion } from 'framer-motion';
import { easeOut, viewportOnce } from '../motion';
import './LivingCurriculumMap.css';

type Anchor = 'left' | 'right' | 'top' | 'bottom';

const modules: {
  id: string;
  label: string;
  code: string;
  x: number;
  y: number;
  image: string;
  blurb: string;
  anchor: Anchor;
}[] = [
  {
    id: 'history',
    label: 'World History',
    code: 'HUM-204',
    x: 22,
    y: 28,
    image: '/curriculum/history.webp',
    blurb: 'Civilizations rendered as kinetic timelines and architectural motion sequences.',
    anchor: 'right',
  },
  {
    id: 'biology',
    label: 'Cellular Biology',
    code: 'BIO-110',
    x: 78,
    y: 22,
    image: '/curriculum/biology.webp',
    blurb: 'Microscopic systems mapped into immersive burgundy-lit scientific cinema.',
    anchor: 'left',
  },
  {
    id: 'engineering',
    label: 'Mechanical Systems',
    code: 'ENG-301',
    x: 72,
    y: 72,
    image: '/curriculum/engineering.webp',
    blurb: 'Blueprints transformed into holographic assembly narratives for every lecture.',
    anchor: 'left',
  },
  {
    id: 'ethics',
    label: 'Applied Ethics',
    code: 'PHL-220',
    x: 24,
    y: 68,
    image: '/curriculum/ethics.webp',
    blurb: 'Case debates visualized as branching decision graphs across the semester.',
    anchor: 'right',
  },
  {
    id: 'data',
    label: 'Data Literacy',
    code: 'STA-101',
    x: 50,
    y: 16,
    image: '/curriculum/data.webp',
    blurb: 'Statistical concepts unfold as living charts synchronized to course pacing.',
    anchor: 'bottom',
  },
];

export default function LivingCurriculumMap() {
  const [active, setActive] = useState<string | null>('biology');
  const isTouch =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 900px), (pointer: coarse)').matches;

  return (
    <>
      <section id="curriculum-map" className="cmap section">
        <div className="section-inner">
          <motion.p
            className="eyebrow cmap__eyebrow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            Living Curriculum Map
          </motion.p>
          <motion.h2
            className="cmap__title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            EVERY MODULE. ONE ORBITAL SYSTEM.
          </motion.h2>
          <motion.p
            className="cmap__lead"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
          >
            Tap a node to preview how Elevate turns a syllabus unit into an advanced visual learning module
          </motion.p>
        </div>
      </section>

      <div className="cmap__stage-wrap">
        <div className="cmap__stage">
          <div className="cmap__orbit cmap__orbit--a" aria-hidden="true" />
          <div className="cmap__orbit cmap__orbit--b" aria-hidden="true" />
          <div className="cmap__orbit cmap__orbit--c" aria-hidden="true" />

          <svg className="cmap__links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {modules.map((m) => (
              <line
                key={`link-${m.id}`}
                x1="50"
                y1="50"
                x2={m.x}
                y2={m.y}
                className={active === m.id ? 'cmap__link cmap__link--active' : 'cmap__link'}
              />
            ))}
          </svg>

          <div className="cmap__core">
            <span className="cmap__core-label">SYLLABUS</span>
            <span className="cmap__core-sub">CORE</span>
          </div>

          {modules.map((m) => (
            <div
              key={m.id}
              className={`cmap__branch ${active === m.id ? 'cmap__branch--active' : ''}`}
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
            >
              <button
                type="button"
                className={`cmap__node ${active === m.id ? 'cmap__node--active' : ''}`}
                onMouseEnter={isTouch ? undefined : () => setActive(m.id)}
                onFocus={() => setActive(m.id)}
                onClick={() => setActive(m.id)}
                aria-expanded={active === m.id}
                aria-controls={`cmap-preview-${m.id}`}
              >
                <span className="cmap__node-dot" />
                <span className="cmap__node-code">{m.code}</span>
              </button>

              {active === m.id && (
                <div
                  id={`cmap-preview-${m.id}`}
                  className={`cmap__preview cmap__preview--${m.anchor}`}
                >
                  <div className="cmap__preview-inner">
                    <img
                      src={m.image}
                      alt=""
                      className="cmap__preview-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="cmap__preview-meta">
                      <p className="cmap__preview-code">{m.code}</p>
                      <h3 className="cmap__preview-title">{m.label}</h3>
                      <p className="cmap__preview-blurb">{m.blurb}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
