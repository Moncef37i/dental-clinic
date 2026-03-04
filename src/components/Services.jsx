import { useState } from 'react';
import './Services.css';

export const SERVICES_DATA = [
  {
    icon: '🦷', title: 'Blanchiment Dentaire', price: 'À partir de 8 500 DA', tag: 'Populaire',
    desc: 'Blanchiment professionnel jusqu\'à 8 teintes plus lumineuses en une séance confortable.',
    details: 'Notre traitement de blanchiment dentaire professionnel utilise des gels à base de peroxyde de haute qualité activés par une lumière LED spéciale. En une seule séance de 60 à 90 minutes, vos dents peuvent gagner jusqu\'à 8 teintes de blancheur.',
    duration: '60–90 min', sessions: '1 séance', includes: ['Consultation initiale', 'Protection des gencives', 'Gel blanchissant premium', 'Lampe LED activatrice', 'Kit d\'entretien à domicile'],
  },
  {
    icon: '🔬', title: 'Implants Dentaires', price: 'À partir de 65 000 DA', tag: '',
    desc: 'Implants en titane permanents qui ressemblent, se sentent et fonctionnent comme des dents naturelles.',
    details: 'Les implants dentaires sont la solution la plus durable pour remplacer les dents manquantes. Fabriqués en titane biocompatible, ils s\'intègrent naturellement à votre mâchoire pour une durée de vie de plusieurs décennies.',
    duration: '2–3 séances', sessions: '3–6 mois', includes: ['Radiographie panoramique', 'Pose de l\'implant', 'Couronne en porcelaine', 'Suivi post-opératoire', 'Garantie 5 ans'],
  },
  {
    icon: '😁', title: 'Orthodontie', price: 'À partir de 85 000 DA', tag: 'Nouveau',
    desc: 'Aligneurs transparents et appareils dentaires adaptés pour votre sourire parfait.',
    details: 'Nous proposons des aligneurs transparents invisibles et des appareils dentaires traditionnels. Chaque traitement est entièrement personnalisé selon la morphologie de vos dents.',
    duration: '12–24 mois', sessions: 'Suivi mensuel', includes: ['Scanner 3D des dents', 'Plan de traitement personnalisé', 'Aligneurs transparents inclus', 'Consultations de suivi', 'Contention finale'],
  },
  {
    icon: '🛡️', title: 'Traitement de Canal', price: 'À partir de 18 000 DA', tag: '',
    desc: 'Traitement endodontique sans douleur pour sauver votre dent naturelle.',
    details: 'Le traitement de canal permet de sauver une dent sévèrement infectée ou endommagée. Grâce à notre anesthésie locale avancée et nos techniques modernes, la procédure est totalement indolore.',
    duration: '60–120 min', sessions: '1–2 séances', includes: ['Radiographie de la dent', 'Anesthésie locale', 'Nettoyage des canaux', 'Obturation définitive', 'Couronne de protection'],
  },
  {
    icon: '✨', title: 'Facettes en Porcelaine', price: 'À partir de 35 000 DA', tag: 'Premium',
    desc: 'Facettes artisanales pour un sourire hollywoodien parfait.',
    details: 'Les facettes en porcelaine sont de fines coques de céramique collées sur la face visible de vos dents. Elles corrigent la couleur, la forme et l\'alignement pour un résultat naturel et esthétique.',
    duration: '2 séances', sessions: '2 semaines', includes: ['Consultation esthétique', 'Empreintes numériques', 'Fabrication sur mesure', 'Pose et ajustement', 'Garantie 3 ans'],
  },
  {
    icon: '🧹', title: 'Détartrage Profond', price: 'À partir de 5 500 DA', tag: '',
    desc: 'Détartrage complet et surfaçage radiculaire pour une santé gingivale optimale.',
    details: 'Le détartrage profond (surfaçage radiculaire) élimine le tartre et la plaque accumulés sous la gencive. Ce traitement est essentiel pour traiter la parodontite et prévenir la perte osseuse.',
    duration: '60–90 min', sessions: '1–2 séances', includes: ['Bilan parodontal', 'Détartrage ultrasonique', 'Surfaçage radiculaire', 'Polissage dentaire', 'Conseils d\'hygiène'],
  },
];

export default function Services({ openModalId, setOpenModalId }) {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">⚕️ Nos Soins</div>
          <h2 className="section-title">Nos <span>Services</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Des soins dentaires complets avec les dernières technologies — pour garder votre sourire sain et radieux.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((s, i) => (
            <div key={i} className={`service-card reveal delay-${(i % 3) + 1}`}>
              {s.tag && <span className="service-tag">{s.tag}</span>}
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-footer">
                <span className="service-price">{s.price}</span>
                <button className="service-btn" onClick={() => setOpenModalId(i)}>En savoir plus →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICE MODAL */}
      {openModalId !== null && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setOpenModalId(null); }}>
          <div className="modal-box">
            <button className="modal-close" onClick={() => setOpenModalId(null)}>✕</button>
            <div style={{ fontSize: 52, marginBottom: 16 }}>{SERVICES_DATA[openModalId].icon}</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 8 }}>{SERVICES_DATA[openModalId].title}</h2>
            <div style={{ color: 'var(--cyan-dark)', fontWeight: 700, fontSize: 18, marginBottom: 20 }}>{SERVICES_DATA[openModalId].price}</div>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 24 }}>{SERVICES_DATA[openModalId].details}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
              <div style={{ background: 'var(--off-white)', borderRadius: 10, padding: '12px 16px' }}>
                <div style={{ fontSize: 11, color: 'var(--text-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Durée</div>
                <div style={{ fontWeight: 700, color: 'var(--text-dark)' }}>⏱ {SERVICES_DATA[openModalId].duration}</div>
              </div>
              <div style={{ background: 'var(--off-white)', borderRadius: 10, padding: '12px 16px' }}>
                <div style={{ fontSize: 11, color: 'var(--text-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Séances</div>
                <div style={{ fontWeight: 700, color: 'var(--text-dark)' }}>📅 {SERVICES_DATA[openModalId].sessions}</div>
              </div>
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Ce qui est inclus:</div>
              {SERVICES_DATA[openModalId].includes.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>✓</span>
                  <span style={{ fontSize: 14, color: 'var(--text-mid)' }}>{item}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => { setOpenModalId(null); document.getElementById('appointments')?.scrollIntoView({ behavior: 'smooth' }); }}>
              📅 Prendre Rendez-vous
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
