import { useState, useEffect } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  { name: 'Amina B.', location: 'Bab Ezzouar, Alger', stars: 5, text: 'Une expérience absolument incroyable ! Le Dr. Mitchell a transformé mon sourire en deux séances. Je me sens comme une nouvelle personne !', avatar: '👩' },
  { name: 'Karim M.', location: 'Kouba, Alger', stars: 5, text: 'Zéro douleur, zéro anxiété. L\'équipe m\'a mis totalement à l\'aise. Mes implants sont parfaits, personne ne peut voir la différence !', avatar: '👨' },
  { name: 'Fatima Z.', location: 'Hussein Dey, Alger', stars: 5, text: 'Meilleure clinique dentaire d\'Alger ! La technologie est à la pointe et le personnel est vraiment attentionné.', avatar: '👩' },
  { name: 'Youcef T.', location: 'El Harrach, Alger', stars: 4, text: 'Très satisfait de mon traitement d\'orthodontie. Le Dr. Okafor est un excellent professionnel, très à l\'écoute.', avatar: '🧔' },
  { name: 'Nadia K.', location: 'Bir Mourad Raïs, Alger', stars: 5, text: 'Mes facettes en porcelaine sont magnifiques ! Je reçois des compliments tous les jours. Merci PureSmile !', avatar: '👩' },
  { name: 'Mourad A.', location: 'Rouiba, Alger', stars: 5, text: 'Service impeccable du début à la fin. La clinique est moderne et très propre. Je recommande vivement !', avatar: '👨' },
  { name: 'Sonia R.', location: 'Dar El Beida, Alger', stars: 5, text: 'Le blanchiment dentaire a dépassé mes attentes. Mon sourire est maintenant éclatant et naturel. Très heureuse !', avatar: '👩' },
  { name: 'Amar L.', location: 'Bachdjerrah, Alger', stars: 4, text: 'Très bon suivi après l\'opération. L\'équipe est disponible et professionnelle. Je reviendrai sans hésiter.', avatar: '🧔' },
  { name: 'Leila H.', location: 'Birkhadem, Alger', stars: 5, text: 'J\'avais très peur du dentiste mais ici tout s\'est passé dans le calme et sans douleur. Merci infiniment !', avatar: '👩' },
  { name: 'Rachid O.', location: 'Bourouba, Alger', stars: 5, text: 'Dr. Voss est une chirurgienne exceptionnelle. Mon implant est parfait et la cicatrisation s\'est très bien passée.', avatar: '👨' },
  { name: 'Sabrina C.', location: 'El Biar, Alger', stars: 5, text: 'Clinique très moderne avec un personnel chaleureux. Le rapport qualité-prix est excellent pour Alger.', avatar: '👩' },
  { name: 'Hamid B.', location: 'Hydra, Alger', stars: 4, text: 'Très professionnel. Le détartrage profond m\'a soulagé des douleurs que j\'avais depuis des mois. Merci !', avatar: '👨' },
  { name: 'Yasmine D.', location: 'Mohammadia, Alger', stars: 5, text: 'J\'ai fait mon blanchiment ici et le résultat est spectaculaire. Je suis ravie et mes amis me demandent tous le nom de la clinique !', avatar: '👩' },
  { name: 'Khaled M.', location: 'Oued Smar, Alger', stars: 5, text: 'Prise en charge rapide pour une urgence dentaire un samedi. Je suis impressionné par la réactivité de l\'équipe.', avatar: '🧔' },
  { name: 'Meriem A.', location: 'Ben Aknoun, Alger', stars: 5, text: 'Le Dr. Okafor a suivi mon traitement orthodontique avec beaucoup de sérieux. Mon sourire est méconnaissable maintenant !', avatar: '👩' },
  { name: 'Nassim T.', location: 'Bab Ezzouar, Alger', stars: 4, text: 'Bonne expérience globale. Le cabinet est bien équipé et le personnel est aimable. Je recommande.', avatar: '👨' },
  { name: 'Houria F.', location: 'Bordj El Kiffan, Alger', stars: 5, text: 'Un grand merci au Dr. Mitchell pour sa patience et son professionnalisme. Mon sourire est enfin celui dont je rêvais !', avatar: '👩' },
  { name: 'Sofiane G.', location: 'Baraki, Alger', stars: 5, text: 'Clinique propre, moderne et accueillante. Le traitement de canal s\'est passé sans aucune douleur. Impressionnant !', avatar: '🧔' },
  { name: 'Assia N.', location: 'Dely Ibrahim, Alger', stars: 5, text: 'Je suis venue pour un bilan dentaire et j\'ai découvert une équipe vraiment passionnée. La qualité est au rendez-vous !', avatar: '👩' },
  { name: 'Omar B.', location: 'Chevalley, Alger', stars: 4, text: 'Très bon accueil et suivi sérieux. L\'attente est parfois longue mais la qualité des soins en vaut la peine.', avatar: '👨' },
  { name: 'Djamila K.', location: 'Gué de Constantine, Alger', stars: 5, text: 'Mes enfants et moi sommes tous patients ici. L\'équipe sait mettre les plus jeunes à l\'aise. Bravo !', avatar: '👩' },
  { name: 'Bilal S.', location: 'Les Eucalyptus, Alger', stars: 5, text: 'Un vrai cabinet de standing ! Équipements modernes, staff souriant. Je n\'irai plus nulle part ailleurs.', avatar: '👨' },
  { name: 'Rania L.', location: 'Bab El Oued, Alger', stars: 5, text: 'Résultat du blanchiment au-delà de mes espérances. En une heure, mes dents sont plusieurs teintes plus blanches !', avatar: '👩' },
  { name: 'Mehdi Z.', location: 'Caroubier, Alger', stars: 4, text: 'Bonne prise en charge et explications claires sur chaque étape du traitement. Je me suis senti en confiance.', avatar: '🧔' },
  { name: 'Nawel R.', location: 'Birmendreïs, Alger', stars: 5, text: 'Dr. Voss a posé mon implant avec une précision remarquable. Six mois plus tard, tout va parfaitement bien !', avatar: '👩' },
  { name: 'Fares A.', location: 'Mahelma, Alger', stars: 5, text: 'Une clinique qui fait honneur à la médecine dentaire en Algérie. Service excellent, résultats exceptionnels.', avatar: '👨' },
  { name: 'Imane C.', location: 'Bouzaréah, Alger', stars: 5, text: 'J\'ai eu peur de la chirurgie mais Dr. Voss m\'a rassurée à chaque étape. Le résultat est parfait, merci !', avatar: '👩' },
  { name: 'Walid H.', location: 'Staoueli, Alger', stars: 4, text: 'Cadre agréable et soins de qualité. Le prix est justifié par rapport à la qualité des matériaux utilisés.', avatar: '👨' },
  { name: 'Chaima B.', location: 'Saoula, Alger', stars: 5, text: 'Mon traitement orthodontique avance parfaitement. Je vois déjà les résultats après seulement 4 mois. Incroyable !', avatar: '👩' },
  { name: 'Tarek M.', location: 'Zéralda, Alger', stars: 5, text: 'La meilleure décision que j\'ai prise pour ma santé bucco-dentaire. PureSmile, c\'est le top à Alger !', avatar: '🧔' },
];

const ITEMS_PER_PAGE = 3;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const totalPages = Math.ceil(TESTIMONIALS.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const t = setInterval(() => goToPage((prev) => (prev + 1) % totalPages), 5000);
    return () => clearInterval(t);
  }, [totalPages]);

  const goToPage = (getNext) => {
    setAnimating(true);
    setTimeout(() => {
      setPage(getNext);
      setAnimating(false);
    }, 300);
  };

  const handleDot = (i) => goToPage(() => i);

  const start = page * ITEMS_PER_PAGE;
  const current = TESTIMONIALS.slice(start, start + ITEMS_PER_PAGE);

  return (
    <section className="section testimonials-section">
      <div className="testi-bg-blob" />
      <div className="container">

        {/* Header */}
        <div className="testi-header">
          <div className="testi-tag">💬 Témoignages</div>
          <h2 className="testi-title">
            Ce Que Disent Nos <span>Patients</span>
          </h2>
          <div className="testi-divider" />
          <p className="testi-subtitle">
            {TESTIMONIALS.length} avis vérifiés — Patients de Bab Ezzouar et toute la région d'Alger
          </p>
        </div>

        {/* Cards */}
        <div className={`testi-grid ${animating ? 'fading' : 'visible'}`}>
          {current.map((t, i) => (
            <div key={`${page}-${i}`} className="testi-card">
              <div className="testi-quote">❝</div>
              <div className="testi-stars">
                {'⭐'.repeat(t.stars)}{t.stars === 4 ? '☆' : ''}
              </div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.avatar}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-loc">📍 {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="testi-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`testi-dot ${i === page ? 'active' : ''}`}
              onClick={() => handleDot(i)}
            />
          ))}
        </div>

        <div className="testi-counter">
          {start + 1}–{Math.min(start + ITEMS_PER_PAGE, TESTIMONIALS.length)} sur {TESTIMONIALS.length} avis
        </div>

      </div>
    </section>
  );
}