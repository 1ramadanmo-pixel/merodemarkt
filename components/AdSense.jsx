import React, { useEffect } from 'react';

function AdSense({ slot }) {
  useEffect(() => {
    try {
      // تفعيل الإعلان بمجرد تحميل المكون على الشاشة
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense Error: ", e);
    }
  }, []);

  return (
    <div className="adsense-container" style={{ margin: '20px 0', textOrigin: 'center', overflow: 'hidden' }}>
      {/* وحدة إعلانية متجاوبة تناسب شاشات الهواتف والحواسيب تلقائياً */}
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // ضع رقم معرّفك هنا أيضاً
        data-ad-slot={slot}                        // رقم الوحدة الإعلانية الممرر للمكون
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

export default AdSense;
