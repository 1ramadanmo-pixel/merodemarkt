import React, { createContext, useState, useContext } from 'react';

// إنشاء سياق البيانات (Context) الخاص بالسلة
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // دالة إضافة منتج إلى السلة أو زيادة كميته
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // دالة حذف منتج أو تقليل كميته
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  // دالة مسح السلة بالكامل
  const clearCart = () => setCart([]);

  // حساب إجمالي السعر
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // حساب إجمالي عدد القطع في السلة
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook مخصص لسهولة استدعاء السلة في أي ملف
export const useCart = () => useContext(CartContext);
