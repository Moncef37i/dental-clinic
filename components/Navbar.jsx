import { useState, useEffect } from 'react';
import logo from '../assets/dental.png';
import { useSearch } from '../context/SearchContext';
import './Navbar.css';

const NAV_LINKS = ['Home', 'Services', 'Doctors', 'Appointments', 'Contact'];
const NAV_LABELS = { Home: 'Accueil', Services: 'Services', Doctors: 'Médecins', Appointments: 'Rendez-vous', Contact: 'Contact' };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const { setSearchOpen } = useSearch();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <span className="top-bar-icon">🚨</span>
            <span className="top-bar-label">Urgence:</span>
            <a href="tel:+213673940984" className="top-bar-link">0673 940 984</a>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-icon">✉️</span>
            <a href="mailto:puresmile123@gmail.com" className="top-bar-link">puresmile123@gmail.com</a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="brand" onClick={() => scrollTo('Home')}>
            <img src={logo} alt="Logo Dentaire" className="brand-logo" />
            <div className="brand-text">
              <span className="brand-name">PureSmile</span>
              <span className="brand-sub">Dentistry</span>
            </div>
          </div>

          <ul className="nav-links hide-mobile">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button className={`nav-link ${active === link ? 'active' : ''}`} onClick={() => scrollTo(link)}>
                  {NAV_LABELS[link]}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-right hide-mobile">
            <button className="search-icon-btn" onClick={() => setSearchOpen(true)} aria-label="Rechercher" title="Rechercher">
              🔍
            </button>
            <button className="btn-primary" onClick={() => scrollTo('Appointments')}>
              Réserver
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="hide-desktop">
            <button className="search-icon-btn" onClick={() => setSearchOpen(true)}>🔍</button>
            <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <button key={link} className={`mobile-nav-link ${active === link ? 'active' : ''}`} onClick={() => scrollTo(link)}>
            {NAV_LABELS[link]}
          </button>
        ))}
        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }} onClick={() => scrollTo('Appointments')}>
          Prendre Rendez-vous
        </button>
        <div className="mobile-contact">
          <a href="tel:+213673940984">🚨 0673 940 984</a>
          <a href="mailto:puresmile123@gmail.com">✉️ puresmile123@gmail.com</a>
        </div>
      </div>
    </header>
  );
}
