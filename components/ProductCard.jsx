import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      {/* صورة المنتج */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      {/* تفاصيل المنتج */}
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.name}</h3>
        <div className="product-footer">
          <span className="product-price">€{product.price.toFixed(2)}</span>
          {/* زر الإضافة للسلة */}
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            + Toevoegen
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
