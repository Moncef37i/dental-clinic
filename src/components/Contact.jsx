import { useState } from 'react';
import './Contact.css';

function getStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();
  const minute = now.getMinutes();
  const timeInMinutes = hour * 60 + minute;
  const openTime = 8 * 60;   // 08:00
  const closeTime = 19 * 60; // 19:00

  if (day === 0) return { open: false, label: 'Dimanche — Urgences Uniquement' };
  if (timeInMinutes >= openTime && timeInMinutes < closeTime) return { open: true, label: 'Actuellement Ouvert' };
  return { open: false, label: 'Actuellement Fermé' };
}

export default function Contact() {
  const [copied, setCopied] = useState('');
  const status = getStatus();

  const copyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopied(email);
    setTimeout(() => setCopied(''), 2500);
  };

  return (
    <section id="contact" className="section contact-section">
      {copied && <div className="copy-toast">✅ Email copié : {copied}</div>}

      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">📍 Nous Trouver</div>
          <h2 className="section-title">Notre <span>Emplacement</span></h2>
          <div className="divider centered" />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Situés au cœur de Bab Ezzouar, Alger. Parking gratuit disponible sur place.
          </p>
        </div>

        <div className="contact-layout">
          {/* Map */}
          <div className="map-wrap reveal-left">
            <div className="map-placeholder">
              <div className="map-pin">📍</div>
              <div className="map-label">PureSmile Dentistry</div>
              <div className="map-address">Bab Ezzouar, Alger, Algérie</div>
              <a
                href="https://maps.google.com/?q=Bab+Ezzouar+Alger+Algerie"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ marginTop: 20, display: 'inline-flex' }}
              >
                🗺️ Ouvrir dans Google Maps
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="contact-info reveal-right">
            {/* Hours */}
            <div className="contact-block">
              <h4 className="contact-block-title">🕐 Horaires d'Ouverture</h4>
              {[
                ['Lundi – Vendredi', '8h00 – 19h00', false],
                ['Samedi', '8h00 – 19h00', false],
                ['Dimanche', 'Urgences Uniquement', true],
              ].map(([day, hours, emergency]) => (
                <div key={day} className="hours-row">
                  <span className="hours-day">{day}</span>
                  <span className={`hours-time ${emergency ? 'emergency-time' : ''}`}>{hours}</span>
                </div>
              ))}

              {/* Live status badge */}
              <div className={`open-status ${status.open ? 'is-open' : 'is-closed'}`}>
                <span className="open-dot" />
                {status.label}
              </div>
            </div>

            {/* Contact us */}
            <div className="contact-block">
              <h4 className="contact-block-title">📞 Contactez-nous</h4>
              <div className="contact-links">
                <a href="tel:+213673940984" className="contact-link">📞 0673 940 984</a>
                <a href="tel:14" className="contact-link emergency-link">🚨 Urgence: 14 (SAMU)</a>
                <button className="contact-link email-copy" onClick={() => copyEmail('puresmile123@gmail.com')}>
                  ✉️ puresmile123@gmail.com
                  <span className="copy-badge">{copied === 'puresmile123@gmail.com' ? '✅ Copié !' : '📋 Copier'}</span>
                </button>
                <a href="https://wa.me/213673940984" target="_blank" rel="noreferrer" className="contact-link whatsapp-link">
                  💬 WhatsApp: 0673 940 984
                </a>
                <div className="contact-link address-link">📍 Bab Ezzouar, Alger, Algérie</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}