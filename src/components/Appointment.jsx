import { useState } from 'react';
import './Appointment.css';

const SERVICES = ['Blanchiment Dentaire', 'Implants Dentaires', 'Orthodontie', 'Traitement de Canal', 'Facettes en Porcelaine', 'Détartrage Profond', 'Consultation Générale'];
const TIMES = ['08:00', '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

export default function Appointment() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', time: '', note: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Also open WhatsApp with booking details
      const msg = encodeURIComponent(`Bonjour PureSmile ! Je souhaite prendre rendez-vous.\n\n👤 Nom: ${form.name}\n📞 Téléphone: ${form.phone}\n🦷 Service: ${form.service}\n📅 Date souhaitée: ${form.date}\n⏰ Heure: ${form.time}\n📝 Note: ${form.note || 'Aucune'}`);
      window.open(`https://wa.me/213673940984?text=${msg}`, '_blank');
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', phone: '', email: '', service: '', date: '', time: '', note: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="appointments" className="section section-alt">
      <div className="container appt-layout">
        <div className="appt-info reveal-left">
          <div className="section-tag">📅 Réservation</div>
          <h2 className="section-title">Prenez Votre<br /><span>Rendez-vous</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Faites le premier pas vers un sourire plus sain et plus beau. Notre équipe confirmera votre rendez-vous dans les plus brefs délais.
          </p>

          <div className="appt-contacts">
            {[
              ['📞', 'Appelez-nous', '0673 940 984', 'tel:+213673940984'],
              ['🚨', 'Urgence', '14 (SAMU Algérie)', 'tel:14'],
              ['✉️', 'Email', 'puresmile123@gmail.com', 'mailto:puresmile123@gmail.com'],
              ['📍', 'Adresse', 'Bab Ezzouar, Alger, Algérie', '#contact'],
              ['⏰', 'Horaires', 'Lun–Sam: 8h00–19h00', '#'],
            ].map(([icon, label, val, href]) => (
              <a key={label} href={href} className="appt-contact-item">
                <div className="appt-contact-icon">{icon}</div>
                <div>
                  <div className="appt-contact-label">{label}</div>
                  <div className="appt-contact-val">{val}</div>
                </div>
              </a>
            ))}
          </div>

          <a href="https://wa.me/213673940984" target="_blank" rel="noreferrer" className="appt-wa">
            💬 Réserver via WhatsApp
          </a>
        </div>

        <div className="appt-form-wrap reveal-right">
          {submitted ? (
            <div className="appt-success">
              <div className="appt-success-icon">✅</div>
              <h3>Rendez-vous Confirmé !</h3>
              <p>Merci <strong>{form.name}</strong> ! WhatsApp s'ouvre pour finaliser votre réservation.</p>
              <div className="appt-success-detail">📱 Confirmation dans &lt; 10 minutes</div>
            </div>
          ) : (
            <form className="appt-form" onSubmit={handleSubmit}>
              <h3 className="appt-form-title">Formulaire de Rendez-vous</h3>

              <div className="form-row">
                <div className="form-group">
                  <label>Nom Complet *</label>
                  <input className="form-input" required placeholder="Votre nom complet" value={form.name} onChange={e => set('name', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Téléphone *</label>
                  <input className="form-input" required placeholder="06XX XX XX XX" value={form.phone} onChange={e => set('phone', e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input className="form-input" type="email" placeholder="votre@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
              </div>

              <div className="form-group">
                <label>Service Souhaité *</label>
                <select className="form-input" required value={form.service} onChange={e => set('service', e.target.value)}>
                  <option value="">Choisir un service...</option>
                  {SERVICES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date Souhaitée *</label>
                  <input className="form-input" type="date" required value={form.date} onChange={e => set('date', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Heure Souhaitée *</label>
                  <select className="form-input" required value={form.time} onChange={e => set('time', e.target.value)}>
                    <option value="">Choisir un créneau...</option>
                    {TIMES.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Notes Supplémentaires</label>
                <textarea className="form-input form-textarea" rows={3} placeholder="Précisions ou questions particulières..." value={form.note} onChange={e => set('note', e.target.value)} />
              </div>

              <button type="submit" className={`btn-primary appt-submit ${loading ? 'loading' : ''}`} disabled={loading}>
                {loading ? <span className="spinner" /> : '📅 Confirmer le Rendez-vous'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
