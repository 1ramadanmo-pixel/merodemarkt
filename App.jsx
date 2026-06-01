import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy'; // 🟢 1. استيراد صفحة الخصوصية الجديدة
import About from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <CartProvider>
      <div className="app-layout">
        <Navbar setPage={setCurrentPage} />
        
        <div className="main-content">
          {/* 🟢 2. التحكم في عرض الصفحة تفاعلياً */}
          {currentPage === 'home' && <Home />}
          {currentPage === 'contact' && <Contact />}
          {currentPage === 'privacy' && <Privacy />} 
          {currentPage === 'about' && <About />}
        </div>

        {/* 🟢 3. تمرير دالة تغيير الصفحة لأسفل الموقع */}
        <Footer setPage={setCurrentPage} />
      </div>
    </CartProvider>
  );
}

export default App;
