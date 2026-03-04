import './Doctors.css';

const DOCTORS = [
  {
    initials: 'SM', name: 'Dr. Sarah Mitchell', role: 'Dentiste Cosmétique en Chef',
    exp: '14 Ans', edu: 'Université d\'Alger — Faculté de Médecine Dentaire',
    color: '#06b6d4', emoji: '👩‍⚕️', reviews: 148,
    phone: '213550000001',
    specialties: ['Blanchiment', 'Facettes', 'Esthétique'],
  },
  {
    initials: 'JO', name: 'Dr. James Okafor', role: 'Spécialiste en Orthodontie',
    exp: '10 Ans', edu: 'Université Constantine — Chirurgie Dentaire',
    color: '#06b6d4', emoji: '👨‍⚕️', reviews: 112,
    phone: '213550000002',
    specialties: ['Aligneurs', 'Appareils', 'Orthodontie'],
  },
  {
    initials: 'LV', name: 'Dr. Lena Voss', role: 'Chirurgien Implantologue',
    exp: '12 Ans', edu: 'Université d\'Oran — Médecine Dentaire',
    color: '#22d3ee', emoji: '👩‍⚕️', reviews: 135,
    phone: '213550000003',
    specialties: ['Implants', 'Chirurgie', 'Parodontie'],
  },
];

export default function Doctors() {
  const handleBook = (doc) => {
    const msg = encodeURIComponent(`Bonjour, je souhaite prendre un rendez-vous avec ${doc.name}. Pouvez-vous me proposer un créneau disponible ? Merci.`);
    window.open(`https://wa.me/${doc.phone}?text=${msg}`, '_blank');
  };

  return (
    <section id="doctors" className="section">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">👨‍⚕️ Notre Équipe</div>
          <h2 className="section-title">Nos <span>Médecins</span></h2>
          <div className="divider centered" />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Des spécialistes hautement qualifiés dédiés à vous offrir des soins exceptionnels avec douceur et expertise.
          </p>
        </div>

        <div className="doctors-grid">
          {DOCTORS.map((doc, i) => (
            <div key={i} className={`doctor-card reveal delay-${i + 1}`}>
              <div className="doctor-photo" style={{ background: `linear-gradient(135deg, ${doc.color}30, ${doc.color}10)` }}>
                <div className="doctor-avatar" style={{ background: `linear-gradient(135deg, ${doc.color}, ${doc.color}cc)` }}>
                  <span>{doc.emoji}</span>
                  <span className="doctor-initials">{doc.initials}</span>
                </div>
                <div className="doctor-exp-badge">{doc.exp}</div>
              </div>
              <div className="doctor-info">
                <h3 className="doctor-name">{doc.name}</h3>
                <div className="doctor-role" style={{ color: doc.color }}>{doc.role}</div>
                <div className="doctor-edu">🎓 {doc.edu}</div>
                <div className="doctor-specialties">
                  {doc.specialties.map(s => (
                    <span key={s} className="doctor-specialty" style={{ borderColor: doc.color, color: doc.color }}>{s}</span>
                  ))}
                </div>
                <div className="doctor-rating">
                  {'⭐'.repeat(5)}
                  <span className="doctor-reviews">({doc.reviews} avis)</span>
                </div>
                <button className="doctor-btn" style={{ borderColor: doc.color, color: doc.color }} onClick={() => handleBook(doc)}>
                  💬 Prendre RDV avec {doc.name.split(' ')[1]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}