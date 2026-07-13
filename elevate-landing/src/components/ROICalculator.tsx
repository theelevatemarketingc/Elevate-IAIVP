import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import './ROICalculator.css';

function formatCurrency(n: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function ROICalculator() {
  const [courses, setCourses] = useState(40);
  const [hours, setHours] = useState(80);
  const [rate, setRate] = useState(175);

  const results = useMemo(() => {
    const traditionalCost = courses * hours * rate;
    const elevateCost = traditionalCost / 10;
    const saved = traditionalCost - elevateCost;
    const traditionalWeeks = Math.max(1, Math.round((courses * hours) / 40));
    const elevateWeeks = Math.max(1, Math.round(traditionalWeeks * 0.1));

    return { traditionalCost, elevateCost, saved, traditionalWeeks, elevateWeeks };
  }, [courses, hours, rate]);

  return (
    <section id="roi" className="roi section">
      <div className="section-inner">
        <motion.p
          className="eyebrow roi__eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Institutional ROI Engine
        </motion.p>
        <motion.h2
          className="roi__title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          MODEL YOUR SAVINGS BEFORE YOU DEPLOY.
        </motion.h2>

        <motion.div
          className="roi__panel"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <div className="roi__controls">
            <label className="roi__field">
              <span className="roi__label">Courses in Scope</span>
              <div className="roi__slider-row">
                <input
                  type="range"
                  min={5}
                  max={200}
                  value={courses}
                  onChange={(e) => setCourses(Number(e.target.value))}
                />
                <strong>{courses}</strong>
              </div>
            </label>

            <label className="roi__field">
              <span className="roi__label">Studio Hours / Course</span>
              <div className="roi__slider-row">
                <input
                  type="range"
                  min={20}
                  max={200}
                  step={5}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                />
                <strong>{hours}h</strong>
              </div>
            </label>

            <label className="roi__field">
              <span className="roi__label">Traditional Rate / Hour</span>
              <div className="roi__slider-row">
                <input
                  type="range"
                  min={75}
                  max={350}
                  step={5}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
                <strong>${rate}</strong>
              </div>
            </label>
          </div>

          <div className="roi__results">
            <div className="roi__stat">
              <span className="roi__stat-label">Traditional Studio</span>
              <span className="roi__stat-value roi__stat-value--muted">
                {formatCurrency(results.traditionalCost)}
              </span>
              <span className="roi__stat-note">~{results.traditionalWeeks} weeks</span>
            </div>

            <div className="roi__stat roi__stat--accent">
              <span className="roi__stat-label">With Elevate</span>
              <span className="roi__stat-value">{formatCurrency(results.elevateCost)}</span>
              <span className="roi__stat-note">~{results.elevateWeeks} weeks</span>
            </div>

            <div className="roi__stat roi__stat--save">
              <span className="roi__stat-label">Estimated Savings</span>
              <span className="roi__stat-value">{formatCurrency(results.saved)}</span>
              <span className="roi__stat-note">90% time · 1/10th cost model</span>
            </div>
          </div>
        </motion.div>

        <p className="roi__disclaimer">
          Estimates for planning only. Final institutional scoping follows consultation.
        </p>
      </div>
    </section>
  );
}
