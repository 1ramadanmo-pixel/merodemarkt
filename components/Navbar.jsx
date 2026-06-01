import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import logoImg from '../assets/logo.png'; 

function Navbar({ setPage }) {
  const { totalItems, cart, addToCart, removeFromCart, totalPrice } = useCart();
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // دالة التنقل بين الصفحات وإغلاق القوائم
  const handleNavClick = (page) => {
    setPage(page);
    setIsMenuOpen(false);
    setShowCartDropdown(false);
  };

  // دالة فتح السلة وإغلاق قائمة الجوال تلقائياً
  const toggleCart = () => {
    setShowCartDropdown(!showCartDropdown);
    setIsMenuOpen(false); 
  };

  // دالة فتح قائمة الجوال وإغلاق السلة تلقائياً
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowCartDropdown(false);
  };

  // دالة إرسال الطلب عبر الواتساب تلقائياً للتوجيه المباشر دون حظر المتصفح
  const handleWhatsappCheckout = () => {
    let message = "🛒 *Nieuwe Bestelling van Merode Markt*\n\n";
    cart.forEach((item) => {
      message += "• " + item.name + " (x" + item.quantity + ") - €" + (item.price * item.quantity).toFixed(2) + "\n";
    });
    message += "\n💰 *Totaalbedrag:* €" + totalPrice.toFixed(2) + "\n\n";
    message += "Graag wil ik deze bestelling afronden. Alvast bedankt!";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = "https://wa.me" + encodedMessage;
    
    // التوجيه المباشر المضمون للهواتف الذكية ومتصفحات الحواسيب
    window.location.href = whatsappUrl;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* زر الهمبرغر للجوال */}
        <button className="menu-toggle-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* شعار المتجر */}
        <div className="logo" onClick={() => handleNavClick('home')}>
          <img src={logoImg} alt="Merode Markt" className="navbar-logo-img" />
        </div>

        {/* روابط الصفحات */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => handleNavClick('home')}>Winkel</button>
          <button onClick={() => handleNavClick('about')}>Over Ons</button>
          <button onClick={() => handleNavClick('contact')}>Contact</button>
        </div>

        {/* زر وأيقونة السلة التفاعلية */}
        <div className="cart-icon-wrapper">
          <button className="cart-btn" onClick={toggleCart}>
            🛒 <span className="cart-badge">{totalItems}</span>
          </button>

          {/* قائمة السلة المنسدلة الاحترافية والكاملة */}
          {showCartDropdown && (
            <div className="cart-dropdown">
              <h3>Jouw Winkelwagen</h3>
              {cart.length === 0 ? (
                <p className="empty-msg" style={{ textAlign: 'center', color: '#64748b', padding: '1rem 0' }}>
                  Je winkelwagen is leeg.
                </p>
              ) : (
                <>
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

                  <div className="cart-footer-sticky">
                    <div className="cart-total">
                      <strong>Totaal:</strong>
                      <strong>€{totalPrice.toFixed(2)}</strong>
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
