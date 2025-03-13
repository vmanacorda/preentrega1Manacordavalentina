import React from 'react';
import './index.css'; 

const CartWidget = () => {
  const cartCount = 5;  

  return (
    <div className="cartWidget">
      <i className="bi bi-cart-fill icon"></i>
      {cartCount > 0 && (
        <span className="notification">{cartCount}</span>
      )}
    </div>
  );
};

export default CartWidget;
