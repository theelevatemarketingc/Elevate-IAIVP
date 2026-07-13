import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled || menuOpen ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo" onClick={scrollTo('top')}>
          <img src="/logo.webp" alt="Elevate" className="navbar__logo-img" />
        </a>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <a href="#pipeline" onClick={scrollTo('pipeline')}>Pipeline</a>
          <a href="#custom-lms" onClick={scrollTo('custom-lms')}>Custom LMS</a>
          <a href="#benefits" onClick={scrollTo('benefits')}>Benefits</a>
          <a href="#cta" className="navbar__links-cta" onClick={scrollTo('cta')}>
            Book an Appointment
          </a>
        </nav>

        <a href="#cta" className="navbar__cta" onClick={scrollTo('cta')}>
          Book an Appointment
        </a>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
