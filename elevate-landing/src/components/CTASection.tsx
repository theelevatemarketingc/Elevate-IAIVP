import { useState } from 'react';
import { motion } from 'framer-motion';
import { easeOut, viewportOnce } from '../motion';
import { BOOKING_EMAIL, CALENDLY_URL } from '../booking';
import './CTASection.css';

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      institution: String(data.get('institution') || ''),
      role: String(data.get('role') || ''),
      email: String(data.get('email') || ''),
      scope: String(data.get('scope') || ''),
      _subject: 'New Elevate Appointment Request',
      _template: 'table',
    };

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${BOOKING_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Failed to send booking details');
      }

      setSubmitted(true);
      window.location.href = CALENDLY_URL;
    } catch {
      setError('Could not send your details. Opening Calendly so you can still book.');
      window.setTimeout(() => {
        window.location.href = CALENDLY_URL;
      }, 1200);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="cta" className="cta section">
      <div className="cta__wave" aria-hidden="true" />
      <div className="cta__mesh-wrap" aria-hidden="true">
        <svg className="cta__mesh" viewBox="0 0 400 400">
          <g className="cta__mesh-spin">
            {[40, 90, 140, 190].map((r) => (
              <ellipse key={r} cx="200" cy="200" rx={r} ry={r * 0.4} fill="none" stroke="rgba(139,0,34,0.5)" strokeWidth="1" />
            ))}
            {[0, 30, 60, 90, 120, 150].map((deg) => (
              <line
                key={deg}
                x1="200"
                y1="200"
                x2={200 + 190 * Math.cos((deg * Math.PI) / 180)}
                y2={200 + 190 * Math.sin((deg * Math.PI) / 180) * 0.4}
                stroke="rgba(139,0,34,0.3)"
                strokeWidth="1"
              />
            ))}
            <circle cx="200" cy="200" r="190" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          </g>
        </svg>
      </div>

      <div className="section-inner cta__inner">
        <motion.h2
          className="cta__headline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          SHAPE THE FUTURE
          <br />
          OF LEARNING.
        </motion.h2>

        <motion.p
          className="cta__subhead"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
        >
          Elevate Your Institution.
        </motion.p>

        <motion.div
          className="cta__media"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <img
            src="/appointment/consult.webp"
            alt="Institutional consultation meeting"
            className="cta__img"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <motion.p
          className="cta__subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
        >
          Tell us about your institution. Our team will map your syllabus to a kinetic
          production plan within 48 hours.
        </motion.p>

        {submitted ? (
          <motion.div
            className="cta__success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <p>Details received. Taking you to Calendly to pick a time…</p>
          </motion.div>
        ) : (
          <motion.form
            className="cta__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.14, ease: easeOut }}
          >
            <div className="cta__form-row">
              <div className="cta__field">
                <label htmlFor="institution">Institution Name</label>
                <input id="institution" name="institution" type="text" placeholder="Institution name" required />
              </div>
              <div className="cta__field">
                <label htmlFor="role">Your Role</label>
                <input id="role" name="role" type="text" placeholder="e.g. Provost, Dean, Faculty" required />
              </div>
            </div>
            <div className="cta__field">
              <label htmlFor="email">Institutional Email</label>
              <input id="email" name="email" type="email" placeholder="you@institution.edu" required />
            </div>
            <div className="cta__field">
              <label htmlFor="scope">Syllabus Scope</label>
              <input id="scope" name="scope" type="text" placeholder="e.g. 40 courses / undergraduate biology dept." />
            </div>

            {error && <p className="cta__error">{error}</p>}

            <button type="submit" className="solid-btn cta__submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Book an Appointment'}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
