import React from 'react';

function Footer({ setPage }) { // 🟢 استقبال دالة تغيير الصفحة هنا
  return (
    <footer className="footer" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
      <p>
        &copy; {new Date().getFullYear()} Merode Markt. Alle rechten voorbehouden. | Ontwikkeld door :{' '}
        <a style={{  marginLeft: '5px', textDecoration: 'underline' }} href="https://eu-cod.eu">
          eu-cod.eu
        </a>
      </p>
      
      {/* 🟢 زر عصري ومخفي مخصص لفتح سياسة الخصوصية */}
      <button 
        onClick={() => setPage('privacy')} 
        style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', fontSize: '0.85rem', textDecoration: 'underline' }}
      >
        Privacybeleid (سياسة الخصوصية)
      </button>
    </footer>
  );
}

export default Footer;
