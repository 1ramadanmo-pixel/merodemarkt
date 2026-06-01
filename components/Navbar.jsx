import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import logoImg from '../assets/logo.png';

function Navbar({ setPage }) {
  const { totalItems, cart, addToCart, removeFromCart, totalPrice } = useCart();
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  // 📝 دالة إرسال الطلب عبر الواتساب تلقائياً
  const handleWhatsappCheckout = () => {
    // ضع رقم هاتفك الدولي هنا (بدون أصفار أو علامة +) مثلاً الرقم الهولندي يبدأ بـ 31
    const phoneNumber = "+32470685016"; 

    // صياغة نص الرسالة باللغة الهولندية وتنسيق المنتجات في أسطر مرتبة
    let message = `🛒 *Nieuwe Bestelling van Merode Markt*\n\n`;
    
    cart.forEach((item) => {
      message += `• ${item.name} (x${item.quantity}) - €${(item.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n💰 *Totaalbedrag:* €${totalPrice.toFixed(2)}\n\n`;
    message += `Graag wil ik deze bestelling afronden. Alvast bedankt!`;

    // ترميز الرسالة لتتوافق مع روابط الإنترنت (URL Encoding)
    const encodedMessage = encodeURIComponent(message);
    
    // إنشاء رابط الواتساب المباشر وفتحه في نافذة جديدة
    const whatsappUrl = `https://wa.me{phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
         {/* 2. كود الشعار المحدث باستخدام الصورة بدلاً من النص */}
        <div className="logo" onClick={() => setPage('home')}>
          <img src={logoImg} alt="MerodeMarkt Logo" className="navbar-logo-img" />
        </div>
        {/* الشعار */}
        
        {/* <div className="logo" onClick={() => setPage('home')}>
          🍏 Merode Markt
        </div> */}

        {/* روابط التنقل */}
        <div className="nav-links">
          <button onClick={() => setPage('home')}>Winkel</button>
          <button onClick={() => setPage('about')}>Over Ons</button>
          <button onClick={() => setPage('contact')}>Contact</button>
        </div>

        {/* زر السلة التفاعلي */}
        <div className="cart-icon-wrapper">
          <button className="cart-btn" onClick={() => setShowCartDropdown(!showCartDropdown)}>
            🛒 <span className="cart-badge">{totalItems}</span>
          </button>

          {/* القائمة المنسدلة المحدثة لمراجعة السلة والطلب */}
{showCartDropdown && (
  <div className="cart-dropdown">
    <h3>Jouw Winkelwagen</h3>
    {cart.length === 0 ? (
      <p className="empty-msg">Je winkelwagen is leeg.</p>
    ) : (
      <>
        {/* صندوق المنتجات الذي سيحتوي على التمرير فقط */}
        <div className="cart-items-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-dropdown-item">
              <span className="cart-item-name">{item.name} (x{item.quantity})</span>
              <div className="cart-item-actions">
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <span className="cart-item-price">€{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* الصندوق السفلي الثابت الخاص بالمجموع والزر */}
        <div className="cart-footer-sticky">
          <div className="cart-total">
            <strong>Totaal: €{totalPrice.toFixed(2)}</strong>
          </div>
          <button 
            className="checkout-btn" 
            style={{ backgroundColor: '#25D366', color: 'white', fontWeight: 'bold' }} 
            onClick={handleWhatsappCheckout}
          >
            Bestellen via WhatsApp 💬
          </button>
        </div>
      </>
    )}
  </div>
)}
    </div>
      </div>
    </nav>
  );
}

export default Navbar;
