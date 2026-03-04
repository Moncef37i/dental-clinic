import { useState } from 'react';
import { SearchProvider } from './context/SearchContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const [openServiceModalId, setOpenServiceModalId] = useState(null);
  useScrollReveal();

  return (
    <SearchProvider>
      <Navbar />
      <SearchPage onOpenServiceModal={setOpenServiceModalId} />
      <main>
        <Hero />
        <Services openModalId={openServiceModalId} setOpenModalId={setOpenServiceModalId} />
        <Doctors />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer onOpenServiceModal={setOpenServiceModalId} />
      <a
        href="https://wa.me/213673940984"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        title="Chattez sur WhatsApp"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </SearchProvider>
  );
}
