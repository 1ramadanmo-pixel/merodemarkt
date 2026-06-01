import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import logoImg from '../assets/logo.png'; 

function Navbar({ setPage }) {
  const { totalItems, cart, addToCart, removeFromCart, totalPrice } = useCart();
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  // 🟢 حالة جديدة للتحكم في فتح وإغلاق قائمة الجوال (همبرغر)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setPage(page);
    setIsMenuOpen(false); // إغلاق القائمة تلقائياً بعد الضغط على أي صفحة
  };

  // ... (دالة handleWhatsappCheckout تبقى كما هي دون تغيير)

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* 🟢 زر الهمبرغر (يظهر على الجوال فقط) */}
        <button className="menu-toggle-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* الشعار واللوجو */}
        <div className="logo" onClick={() => handleNavClick('home')}>
          <img src={logoImg} alt="Merode Markt" className="navbar-logo-img" />
        </div>

        {/* روابط التنقل (تتحول لقائمة منزلقة على الجوال عبر كلاس active) */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => handleNavClick('home')}>Winkel</button>
          <button onClick={() => handleNavClick('about')}>Over Ons</button>
          <button onClick={() => handleNavClick('contact')}>Contact</button>
        </div>

        {/* زر السلة التفاعلي */}
        <div className="cart-icon-wrapper">
          <button className="cart-btn" onClick={() => setShowCartDropdown(!showCartDropdown)}>
            🛒 <span className="cart-badge">{totalItems}</span>
          </button>

          {/* ... (كود القائمة المنسدلة للسلة cart-dropdown يبقى كما هو بدون تغيير) */}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
