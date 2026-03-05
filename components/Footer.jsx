import { useState } from 'react';
import logo from '../assets/dental.png';
import './Footer.css';

const NAV_LINKS = [
  { label: 'Accueil', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Médecins', id: 'doctors' },
  { label: 'Rendez-vous', id: 'appointments' },
  { label: 'Contact', id: 'contact' },
];

const SERVICES = [
  { label: 'Blanchiment Dentaire', serviceId: 0 },
  { label: 'Implants Dentaires', serviceId: 1 },
  { label: 'Orthodontie', serviceId: 2 },
  { label: 'Traitement de Canal', serviceId: 3 },
  { label: 'Facettes en Porcelaine', serviceId: 4 },
  { label: 'Détartrage Profond', serviceId: 5 },
];

const CERTS = ['🏅 ISO 9001', '🦷 ODA Certifié', '⭐ Clinique Premium', '🔬 Haute Technologie'];

function getStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();
  const minute = now.getMinutes();
  const timeInMinutes = hour * 60 + minute;
  const openTime = 8 * 60;   // 08:00
  const closeTime = 19 * 60; // 19:00

  if (day === 0) return { open: false, label: 'Dimanche — Urgences Uniquement' };
  if (timeInMinutes >= openTime && timeInMinutes < closeTime) return { open: true, label: 'Actuellement Ouvert' };
  return { open: false, label: 'Actuellement Fermé' };
}

export default function Footer({ onOpenServiceModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);
  const status = getStatus();
  const year = new Date().getFullYear();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const openService = (serviceId) => {
    scrollTo('services');
    setTimeout(() => onOpenServiceModal(serviceId), 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('puresmile123@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer className="footer">
      {copied && <div className="copy-toast">✅ Email copié dans le presse-papiers !</div>}

      <div className="footer-top">
        <div className="container footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="PureSmile Logo" />
              <div>
                <div className="footer-logo-name">PureSmile</div>
                <div className="footer-logo-sub">Dentistry</div>
              </div>
            </div>
            <p className="footer-desc">
              Des soins dentaires premium conçus pour votre confort et votre confiance. Nous combinons une technologie de pointe et une chaleur humaine authentique.
            </p>
            <div className="footer-rating">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="footer-rating-text">5.0 — 500+ avis</span>
            </div>

            {/* Live open/closed badge */}
            <div className={`footer-status ${status.open ? 'open' : 'closed'}`}>
              <span className="status-dot" />
              {status.label}
              <span className="status-hours">Lun–Sam: 8h–19h</span>
            </div>

            {/* Certifications */}
            <div className="footer-certs">
              {CERTS.map(c => <span key={c} className="footer-cert">{c}</span>)}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Liens Rapides</h4>
            {NAV_LINKS.map(link => (
              <button key={link.id} className="footer-link" onClick={() => scrollTo(link.id)}>
                {link.label}
              </button>
            ))}
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Nos Services</h4>
            {SERVICES.map(s => (
              <button key={s.label} className="footer-link" onClick={() => openService(s.serviceId)}>
                {s.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contactez-nous</h4>
            <div className="footer-contacts">
              <a href="tel:+213673940984" className="footer-contact">📞 0673 940 984</a>
              <a href="tel:14" className="footer-contact footer-emergency">🚨 Urgence: 14 (SAMU)</a>
              <button className="footer-contact footer-email-btn" onClick={copyEmail}>
                ✉️ puresmile123@gmail.com
                <span className="footer-copy-tag">{copied ? '✅' : '📋'}</span>
              </button>
              <a href="https://wa.me/213673940984" target="_blank" rel="noreferrer" className="footer-contact footer-wa">
                💬 WhatsApp: 0673 940 984
              </a>
              <div className="footer-contact">📍 Bab Ezzouar, Alger, Algérie</div>
              <a href="https://maps.google.com/?q=Bab+Ezzouar+Alger" target="_blank" rel="noreferrer" className="footer-maps-btn">
                🗺️ Voir sur Google Maps
              </a>
            </div>

            <div className="footer-apps">
              <div className="footer-apps-title">Application Mobile</div>
              <div className="footer-app-btn">🍎 App Store — Bientôt</div>
              <div className="footer-app-btn">🤖 Google Play — Bientôt</div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="container">
          <div className="footer-newsletter">
            <div className="newsletter-text">
              <h4>📰 Abonnez-vous à notre Newsletter</h4>
              <p>Conseils dentaires, offres spéciales et actualités de la clinique directement dans votre boîte mail.</p>
            </div>
            {subscribed ? (
              <div className="newsletter-success">✅ Merci ! Vous êtes abonné(e).</div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email" required placeholder="Votre adresse email..."
                  value={email} onChange={e => setEmail(e.target.value)}
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">S'abonner →</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-copy">© {year} PureSmile Dentistry — Bab Ezzouar, Alger, Algérie. Tous droits réservés.</div>
          <div className="footer-legal">
            <a href="#">Politique de Confidentialité</a>
            <a href="#">Conditions d'Utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}