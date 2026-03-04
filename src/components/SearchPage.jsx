import { useState, useEffect, useRef } from 'react';
import { useSearch, SEARCH_DATA } from '../context/SearchContext';

export default function SearchPage({ onOpenServiceModal, onOpenDoctorModal }) {
  const { searchOpen, setSearchOpen } = useSearch();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setSearchOpen(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [setSearchOpen]);

  if (!searchOpen) return null;

  const q = query.toLowerCase().trim();
  const filtered = q.length < 1 ? SEARCH_DATA : SEARCH_DATA.filter(item =>
    item.name.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q) ||
    item.type.toLowerCase().includes(q)
  );

  const grouped = filtered.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {});

  const handleAction = (item) => {
    if (item.action === 'scroll') {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
      setSearchOpen(false);
    } else if (item.action === 'service') {
      setSearchOpen(false);
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => onOpenServiceModal(item.id), 600);
    } else if (item.action === 'doctor') {
      setSearchOpen(false);
      document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' });
    } else if (item.action === 'call') {
      window.location.href = 'tel:+213673940984';
    } else if (item.action === 'email') {
      navigator.clipboard.writeText('puresmile123@gmail.com');
      setSearchOpen(false);
    } else if (item.action === 'whatsapp') {
      window.open('https://wa.me/213673940984', '_blank');
      setSearchOpen(false);
    }
  };

  return (
    <div className="search-page" onClick={(e) => { if (e.target === e.currentTarget) setSearchOpen(false); }}>
      <div className="search-page-header">
        <input
          ref={inputRef}
          className="search-page-input"
          placeholder="Rechercher services, médecins, informations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-page-close" onClick={() => setSearchOpen(false)}>✕ Fermer</button>
      </div>

      <div className="search-results">
        {filtered.length === 0 ? (
          <div className="search-no-results">
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <p>Aucun résultat pour "<strong>{query}</strong>"</p>
            <p style={{ fontSize: 14, marginTop: 8, color: '#94a3b8' }}>Essayez: blanchiment, james, implants, rendez-vous...</p>
          </div>
        ) : (
          Object.entries(grouped).map(([type, items]) => (
            <div key={type} className="search-result-group">
              <div className="search-result-group-title">{type}</div>
              {items.map((item, i) => (
                <button key={i} className="search-result-item" onClick={() => handleAction(item)}>
                  <div className="search-result-icon">{item.icon}</div>
                  <div>
                    <div className="search-result-name">{item.name}</div>
                    <div className="search-result-desc">{item.desc}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: '#94a3b8', fontSize: 20 }}>→</div>
                </button>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
