import React from 'react';

function About() {
  return (
    <div className="about-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem', lineHeight: '1.8' }}>
      <h1 style={{ color: '#064e3b', marginBottom: '1.5rem', textAlign: 'center' }}>Over Ons - Merode Markt</h1>
      
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--card-shadow)' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#334155' }}>
          Welkom bij <strong>Merode Markt</strong>! Wij zijn uw vertrouwde supermarkt in Turnhout voor al uw dagelijkse boodschappen en de meest verse producten.
        </p>

        <h3 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>🍏 Onze Missie</h3>
        <p style={{ color: '#475569', marginBottom: '1.5rem' }}>
          Het is onze missie om de gemeenschap te voorzien van een breed assortiment aan kwaliteitsproducten tegen de scherpste prijzen. Van verse groenten en fruit tot dagelijks vers gebakken brood en zuivelproducten; bij ons vindt u alles onder één dak.
        </p>

        <h3 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>🤝 Waarom Kiezen voor Merode Markt?</h3>
        <ul style={{ color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
          <li>Altijd dagverse groenten en fruit rechtstreeks van de leverancier.</li>
          <li>Klantvriendelijke service en een warm welkom in onze fysieke winkel.</li>
          <li>Een innovatieve online bestelservice via WhatsApp voor uw gemak.</li>
        </ul>

        <h3 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>📍 Bezoek Ons</h3>
        <p style={{ color: '#475569' }}>
          Kom gezellig langs in onze winkel om ons volledige assortiment te ontdekken. Ons team staat elke dag klaar om u te helpen bij het vinden van de beste producten voor u en uw gezin!
        </p>
      </div>
    </div>
  );
}

export default About;
