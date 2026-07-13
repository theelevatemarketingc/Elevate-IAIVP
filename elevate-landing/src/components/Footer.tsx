import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/logo.webp" alt="Elevate" className="footer__logo-img" />
        </div>
        <p className="footer__meta">[ AI KINETIC GENERATION ENGINE ] &middot; [ EST. 2026 ]</p>
        <p className="footer__copy">&copy; {new Date().getFullYear()} Elevate Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}
