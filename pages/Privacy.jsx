import React from 'react';

function Privacy() {
  return (
    <div className="privacy-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem', lineHeight: '1.8' }}>
      <h1 style={{ color: '#064e3b', marginBottom: '1.5rem' }}>Privacybeleid - Merode Markt</h1>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>
      
      <section style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>1. Verzameling van Gegevens</h3>
        <p>Wij verzamelen gegevens die u aan ons verstrekt wanneer u een bestelling plaatst via WhatsApp, zoals uw productkeuze en eventuele contactgegevens die nodig zijn om de bestelling te verwerken.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>2. Gebruik van Gegevens</h3>
        <p>Uw gegevens worden uitsluitend gebruikt om uw bestellingen efficiënt te verwerken en onze dienstverlening te verbeteren. Wij delen uw gegevens nooit met derden voor commerciële doeleinden.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>3. Google AdSense & Cookies</h3>
        <p>Onze website maakt gebruik van Google AdSense om advertenties weer te geven. Google gebruikt cookies om advertenties te tonen op basis van uw eerdere bezoeken aan deze of andere websites.</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>4. Identity (Impressum)</h3>
        <p>Ramadan Ibrahim Mohame</p>
        <p>2300 Turnhout, Belgium</p>
        <p>+32 470 68 50 16</p>
        <p>Gecodeerd door Ramadan Mohame</p>
        <p>Gespecialiseerd in Full-stack Webdevelopment.</p>
        
      </section>
    </div>




  );
}

export default Privacy;
