import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import AdSense from '../components/AdSense';


// 🛒 مصفوفة البيانات الكاملة لمنتجات متجر Merode Markt
const dummyProducts = [
  // 1. الخضار والفواكه الطازجة (Groenten & Fruit)
  { id: 1, name: 'Verse Biologische Bananen (per kilo)', price: 1.79, category: 'Groenten & Fruit', image: '../imge/1.jpg' },
  { id: 2, name: 'Verse Aardbeien 500g', price: 3.49, category: 'Groenten & Fruit', image: '/imge/1.jpg' },
  { id: 3, name: 'Tomaat trost (per kilo)', price: 2.29, category: 'Groenten & Fruit', image: '/imge/1.jpg' },
  { id: 4, name: 'Komkommer (per stuk)', price: 0.89, category: 'Groenten & Fruit', image: '/imge/1.jpg' },
  
  // 2. منتجات الألبان والأجبان والبيض (Zuivel & Eieren)
  { id: 5, name: 'Volle Melk 1L', price: 1.25, category: 'Zuivel & Eieren', image: '/imge/2.jpg' },
  { id: 6, name: 'Goudse Kaas Jong Belegen 48+', price: 4.99, category: 'Zuivel & Eieren', image: '/imge/2.jpg' },
  { id: 7, name: 'Scharreleieren (10 stuks)', price: 2.89, category: 'Zuivel & Eieren', image: '/imge/2.jpg' },
  { id: 8, name: 'Griekse Yoghurt 1kg', price: 2.49, category: 'Zuivel & Eieren', image: '/imge/2.jpg' },
  
  // 3. المخبوزات والخبز الطازج (Bakkerij)
  { id: 9, name: 'Vers Volkorenbrood Gesneden', price: 2.49, category: 'Bakkerij', image: '/imge/3.jpg' },
  { id: 10, name: 'Roomboter Croissant (per stuk)', price: 0.89, category: 'Bakkerij', image: '/imge/3.jpg' },
  { id: 11, name: 'Stokbrood Wit', price: 1.10, category: 'Bakkerij', image: '/imge/3.jpg' },

  // 4. المشروبات والعصائر (Frisdrank & Sappen)
  { id: 12, name: 'Coca-Cola Original 1.5L', price: 2.15, category: 'Frisdrank & Sappen', image: '/imge/1.jpg' },
  { id: 13, name: 'Verse Sinaasappelsap 1L', price: 2.99, category: 'Frisdrank & Sappen', image: '/imge/1.jpg' },
  { id: 14, name: 'Spa Blauw Mineraalwater 1.5L', price: 0.95, category: 'Frisdrank & Sappen', image: '/imge/1.jpg' },

  // 5. البقالة والمواد الجافة (Levensmiddelen)
  { id: 15, name: 'Basmati Rijst 1kg', price: 2.39, category: 'Levensmiddelen', image: '/imge/2.jpg' },
  { id: 16, name: 'Extra Virgin Olijfolie 750ml', price: 6.99, category: 'Levensmiddelen', image: '/imge/2.jpg' },
  { id: 17, name: 'Spaghetti Pasta 500g', price: 1.15, category: 'Levensmiddelen', image: '/imge/2.jpg' }
];


function Home() {
  // 🟢 مصفوفة تحتوي على الاسم البرمجي والأيقونة وشكل العرض لكل قسم لتسهيل التحكم
  const categoriesList = [
    { id: 'Alles', label: '🛍️ Alles' },
    { id: 'Groenten & Fruit', label: '🍏 Groenten & Fruit' },
    { id: 'Zuivel & Eieren', label: '🧀 Zuivel & Eieren' },
    { id: 'Bakkerij', label: '🍞 Bakkerij' },
    { id: 'Frisdrank & Sappen', label: '🥤 Frisdrank' },
    { id: 'Levensmiddelen', label: '📦 Groenten' }
  ];

   // 🟢 تعريف المتغيرات المسؤولة عن حالة القسم المختص وحالة نص البحث
  const [selectedCategory, setSelectedCategory] = useState('Alles');
  const [searchQuery, setSearchQuery] = useState('');

  // 🟢 تصفية ذكية مزدوجة: تبحث بالقسم وبنص البحث معاً في نفس اللحظة
  const filteredProducts = dummyProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'Alles' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-page">
      {/* القسم الرئيسي الترحيبي */}
      <header className="hero-section">
        <h1>Merode Markt</h1>
        <h2>Vers & snel bij jou thuis</h2>
        <p>Ontdek de beste kwaliteit supermarktproducten tegen de scherpste prijzen.</p>
      </header>

      {/* 🟢 1. شريط البحث العصري والمصمم باللغة الهولندية */}
      <div className="search-container">
        <input 
          type="text" 
          placeholder="🔍 Zoek naar producten... " 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // تحديث نص البحث عند كل حرف يكتبه الزبون
          className="search-input"
        />
      </div>

      {/* أزرار الفلترة والأقسام */}
      <div className="categories-filter">
        {categoriesList.map((cat) => (
          <button 
            key={cat.id} 
            className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* شبكة عرض المنتجات المتجاوبة */}
      <main className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          // 🟢 رسالة تظهر للعميل بالهولندية في حال عدم وجود منتج يطابق بحثه
          <p className="no-products-msg">Geen producten gevonden die voldoen aan uw zoekopdracht.</p>
        )}
      </main>
    </div>
  );
}

export default Home;
