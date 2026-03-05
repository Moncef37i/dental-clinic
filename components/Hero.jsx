import './Hero.css';
import smileImg from '../assets/smile.png';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      <div className="container hero-content-wrap">

        {/* LEFT: Text */}
        <div className="hero-left">
          <div className="hero-tag reveal">
            <span className="tag-dot" />
            Soins Dentaires Premium — Bab Ezzouar, Alger
          </div>

          <h1 className="hero-title reveal delay-1">
            Votre Plus Beau<br />
            <span className="hero-highlight">Sourire</span><br />
            Commence Ici
          </h1>

          <p className="hero-desc reveal delay-2">
            Des soins dentaires de classe mondiale dans un environnement calme et accueillant.
            Des bilans de routine aux transformations complètes — nous prenons soin de chaque dent, à chaque visite.
          </p>

          <div className="hero-badges reveal delay-3">
            {['✓ Traitement Sans Douleur', '✓ Urgence le Jour Même', '✓ Financement 0%'].map((b) => (
              <span key={b} className="hero-badge">{b}</span>
            ))}
          </div>

          <div className="hero-actions reveal delay-4">
            <button className="btn-primary" onClick={() => scrollTo('appointments')}>
              📅 Prendre Rendez-vous
            </button>
            <button className="btn-outline" onClick={() => scrollTo('services')}>
              Nos Services
            </button>
          </div>

          <div className="hero-stats reveal delay-5">
            {[['2 400+', 'Patients Satisfaits'], ['14', "Ans d'Expérience"], ['98%', 'Satisfaction']].map(([num, label]) => (
              <div key={label} className="hero-stat">
                <span className="hero-stat-num">{num}</span>
                <span className="hero-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="hero-right reveal delay-2">
          <div className="hero-image-wrap">
            <div className="hero-image-bg" />
            <img src={smileImg} alt="Sourire PureSmile" className="hero-img" />
          </div>
        </div>

      </div>
    </section>
  );
}