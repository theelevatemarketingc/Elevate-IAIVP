import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { easeOut, viewportOnce } from '../motion';
import './CustomLMS.css';

const integrations = [
  { name: 'Google Classroom', status: 'Active', color: '#34A853' },
  { name: 'Canvas LMS', status: 'Active', color: '#E02229' },
  { name: 'Blackboard', status: 'Active', color: '#F0B323' },
  { name: 'Moodle', status: 'Active', color: '#F25F22' },
];

const chatMessages = [
  { sender: 'user', text: 'How does the World History timeline connect to HUM-204?' },
  { sender: 'bot', text: 'I have mapped the World History timeline! You can interact with the kinetic Roman Colosseum module. Tap below to launch it.' },
  { sender: 'user', text: 'Awesome, can you explain the cellular membrane too?' },
  { sender: 'bot', text: 'Of course! In BIO-110, the lipid bilayer is visualized as a 3D fluid mosaic. Would you like me to open the active simulation?' }
];

export default function CustomLMS() {
  const [visibleMessages, setVisibleMessages] = useState<typeof chatMessages>([]);

  useEffect(() => {
    // Simulate a typing effect/delayed chat conversation
    setVisibleMessages([chatMessages[0]]);
    const timers: any[] = [];

    const t1 = setTimeout(() => {
      setVisibleMessages(prev => [...prev, chatMessages[1]]);
    }, 1500);

    const t2 = setTimeout(() => {
      setVisibleMessages(prev => [...prev, chatMessages[2]]);
    }, 3500);

    const t3 = setTimeout(() => {
      setVisibleMessages(prev => [...prev, chatMessages[3]]);
    }, 5000);

    timers.push(t1, t2, t3);

    // Loop conversation
    const loopTimer = setInterval(() => {
      setVisibleMessages([chatMessages[0]]);
      const lt1 = setTimeout(() => {
        setVisibleMessages(prev => [...prev, chatMessages[1]]);
      }, 1500);
      const lt2 = setTimeout(() => {
        setVisibleMessages(prev => [...prev, chatMessages[2]]);
      }, 3500);
      const lt3 = setTimeout(() => {
        setVisibleMessages(prev => [...prev, chatMessages[3]]);
      }, 5000);
      timers.push(lt1, lt2, lt3);
    }, 10000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loopTimer);
    };
  }, []);

  return (
    <section id="custom-lms" className="lms section">
      <div className="section-inner">
        <motion.p
          className="eyebrow lms__eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          Next-Gen LMS Integration
        </motion.p>
        <motion.h2
          className="lms__title"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          YOUR SYLLABUS. YOUR LMS.
          <br />
          PLUG & PLAY.
        </motion.h2>
        <motion.p
          className="lms__lead"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, delay: 0.06, ease: easeOut }}
        >
          Seamlessly bridge your existing LMS with Elevate's kinetic modules, or launch our custom-branded student portal complete with a personal AI learning companion.
        </motion.p>

        <div className="lms__grid">
          {/* Left Side: Interactive Dashboard Mockup */}
          <motion.div
            className="lms__visual"
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <div className="lms__mockup-header">
              <div className="lms__mockup-dots">
                <span className="lms__mockup-dot lms__mockup-dot--red" />
                <span className="lms__mockup-dot lms__mockup-dot--yellow" />
                <span className="lms__mockup-dot lms__mockup-dot--green" />
              </div>
              <div className="lms__mockup-title">ELEVATE STUDENT PORTAL v2.5</div>
            </div>

            <div className="lms__mockup-body">
              {/* Integrations Panel */}
              <div className="lms__panel lms__panel--integrations">
                <h4 className="lms__panel-title">LMS SYNC STATUS</h4>
                <div className="lms__integrations-list">
                  {integrations.map((item) => (
                    <div key={item.name} className="lms__integration-item">
                      <div className="lms__integration-info">
                        <span className="lms__integration-dot" style={{ backgroundColor: item.color }} />
                        <span className="lms__integration-name">{item.name}</span>
                      </div>
                      <span className="lms__integration-status">
                        <span className="lms__status-pulse" />
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Bot Panel */}
              <div className="lms__panel lms__panel--chat">
                <div className="lms__chat-header">
                  <div className="lms__chat-avatar">
                    <span className="lms__avatar-inner">AI</span>
                    <span className="lms__avatar-pulse" />
                  </div>
                  <div className="lms__chat-meta">
                    <span className="lms__chat-title">Personal Learning Bot</span>
                    <span className="lms__chat-status">Online • 24/7 Companion</span>
                  </div>
                </div>

                <div className="lms__chat-messages">
                  <AnimatePresence initial={false}>
                    {visibleMessages.map((msg, idx) => (
                      <motion.div
                        key={idx + '-' + msg.sender}
                        className={`lms__chat-bubble lms__chat-bubble--${msg.sender}`}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, ease: easeOut }}
                      >
                        <p className="lms__bubble-text">{msg.text}</p>
                        {msg.sender === 'bot' && idx === visibleMessages.length - 1 && (
                          <div className="lms__bubble-actions">
                            <button className="lms__bubble-btn">Launch 3D Module</button>
                            <button className="lms__bubble-btn lms__bubble-btn--secondary">Ask Question</button>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Features List */}
          <div className="lms__features">
            <motion.div
              className="lms__feature-card"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
            >
              <div className="lms__feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M12 14l-4-4h8z" />
                </svg>
              </div>
              <div className="lms__feature-content">
                <h3 className="lms__feature-title">Google Classroom & Major LMS Sync</h3>
                <p className="lms__feature-desc">
                  Full, native integration with Canvas, Blackboard, Moodle, and Google Classroom. Deploy kinetic modules directly to students with one-click package exports.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lms__feature-card"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.12, ease: easeOut }}
            >
              <div className="lms__feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="lms__feature-content">
                <h3 className="lms__feature-title">Personal AI Learning Bot</h3>
                <p className="lms__feature-desc">
                  An AI companion trained directly on your course syllabus, lecture notes, and visual assets. It answers student inquiries 24/7 and points them to relevant visual modules.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lms__feature-card"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.19, ease: easeOut }}
            >
              <div className="lms__feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <div className="lms__feature-content">
                <h3 className="lms__feature-title">Interactive Student Hub</h3>
                <p className="lms__feature-desc">
                  A gorgeous, dark-mode student portal where learners can view their living curriculum maps and track weekly progress.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lms__feature-card"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.23, ease: easeOut }}
            >
              <div className="lms__feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <div className="lms__feature-content">
                <h3 className="lms__feature-title">Interactive Quizzes</h3>
                <p className="lms__feature-desc">
                  Deploy custom-generated quizzes directly linked to each syllabus module to reinforce core concepts and test retention automatically.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lms__feature-card"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.27, ease: easeOut }}
            >
              <div className="lms__feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div className="lms__feature-content">
                <h3 className="lms__feature-title">Dynamic PDF Study Guides</h3>
                <p className="lms__feature-desc">
                  Instantly compile syllabus topics, visual map notes, and study materials into beautifully formatted, downloadable PDF guides for offline study.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lms__feature-card"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.31, ease: easeOut }}
            >
              <div className="lms__feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
              </div>
              <div className="lms__feature-content">
                <h3 className="lms__feature-title">Real-Time Faculty Analytics</h3>
                <p className="lms__feature-desc">
                  Gain deep visibility into student comprehension. Track module engagement, monitor chat bot queries, and identify learning bottlenecks before exams.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
