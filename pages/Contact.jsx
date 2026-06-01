import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2>Contact & Openingstijden</h2>
        <p>Heeft u vragen? Neem gerust contact met ons op of bezoek onze winkel.</p>
        
        <div className="info-section">
          <p>📍 <strong>Adres:</strong> Jouw Winkelstraat 123, Belgum</p>
          <p>📞 <strong>Telefoon:</strong> +32 4 70685016</p>
          <p>📧 <strong>E-mail:</strong> info@markt.be</p>
        </div>

        <hr />

        <h3>Openingstijden</h3>
        <ul className="hours-list">
          <li>Maandag: 08:00 - 20:00</li>
          <li>Dinsdag: Gesloten</li>
          <li>Woensdag: 08:00 - 18:00</li>
          <li>Donderdag: 08:00 - 18:00</li>
          <li>Vrijdag: 08:00 - 18:00</li>
          <li>Zaterdag: 08:00 - 18:00</li>
          <li>Zondag: 08:00 - 18:00</li>
        </ul>
      </div>

      {/* تضمين خريطة جوجل التفاعلية لمتجرك */}
      <div className="map-container">
        <iframe 
          title="VersMarkt Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2210.9502418189318!2d4.942062023950756!3d51.32204372422805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6b355eab2e91f%3A0x940dc5a6dfca4459!2sMerode%20Markt!5e1!3m2!1sar!2sbe!4v1780257014722!5m2!1sar!2sbe" 
          width="100%" 
          height="100%" 
          style={{ border: 0, borderRadius: '16px' }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
