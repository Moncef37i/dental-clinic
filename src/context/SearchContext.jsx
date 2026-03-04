import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SEARCH_DATA = [
  // Services
  { type: 'Service', icon: '🦷', name: 'Blanchiment Dentaire', desc: 'Blanchiment professionnel jusqu\'à 8 teintes plus lumineuses.', action: 'service', id: 0 },
  { type: 'Service', icon: '🔬', name: 'Implants Dentaires', desc: 'Implants en titane permanents, naturels et durables.', action: 'service', id: 1 },
  { type: 'Service', icon: '😁', name: 'Orthodontie', desc: 'Aligneurs transparents et appareils dentaires sur mesure.', action: 'service', id: 2 },
  { type: 'Service', icon: '🛡️', name: 'Traitement de Canal', desc: 'Traitement endodontique sans douleur.', action: 'service', id: 3 },
  { type: 'Service', icon: '✨', name: 'Facettes en Porcelaine', desc: 'Facettes artisanales pour un sourire parfait.', action: 'service', id: 4 },
  { type: 'Service', icon: '🧹', name: 'Détartrage Profond', desc: 'Détartrage complet pour une santé gingivale optimale.', action: 'service', id: 5 },
  // Doctors
  { type: 'Médecin', icon: '👩‍⚕️', name: 'Dr. Sarah Mitchell', desc: 'Dentiste Cosmétique en Chef — 14 ans d\'expérience', action: 'doctor', id: 0 },
  { type: 'Médecin', icon: '👨‍⚕️', name: 'Dr. James Okafor', desc: 'Spécialiste en Orthodontie — 10 ans d\'expérience', action: 'doctor', id: 1 },
  { type: 'Médecin', icon: '👩‍⚕️', name: 'Dr. Lena Voss', desc: 'Chirurgien Implantologue — 12 ans d\'expérience', action: 'doctor', id: 2 },
  // Sections
  { type: 'Page', icon: '🏠', name: 'Accueil', desc: 'Retour à la page d\'accueil', action: 'scroll', id: 'home' },
  { type: 'Page', icon: '⚕️', name: 'Nos Services', desc: 'Voir tous nos services dentaires', action: 'scroll', id: 'services' },
  { type: 'Page', icon: '📅', name: 'Rendez-vous', desc: 'Prendre un rendez-vous en ligne', action: 'scroll', id: 'appointments' },
  { type: 'Page', icon: '📍', name: 'Contact', desc: 'Nous contacter — Bab Ezzouar, Alger', action: 'scroll', id: 'contact' },
  // Contact info
  { type: 'Contact', icon: '📞', name: '0673 940 984', desc: 'Appeler la clinique', action: 'call' },
  { type: 'Contact', icon: '✉️', name: 'puresmile123@gmail.com', desc: 'Envoyer un email', action: 'email' },
  { type: 'Contact', icon: '💬', name: 'WhatsApp', desc: 'Chatter sur WhatsApp', action: 'whatsapp' },
];

export function SearchProvider({ children }) {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <SearchContext.Provider value={{ searchOpen, setSearchOpen }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
