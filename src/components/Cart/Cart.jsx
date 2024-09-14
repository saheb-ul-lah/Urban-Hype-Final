import React, { useState } from 'react';
import "../Cart/Cart.css";

const CartSummary = () => {
  const [product1Quantity, setProduct1Quantity] = useState(2);
  const [product2Quantity, setProduct2Quantity] = useState(1);
  const [product3Quantity, setProduct3Quantity] = useState(3);

  const handleQuantityChange = (product, newQuantity) => {
    switch (product) {
      case 'product1':
        setProduct1Quantity(newQuantity);
        break;
      case 'product2':
        setProduct2Quantity(newQuantity);
        break;
      case 'product3':
        setProduct3Quantity(newQuantity);
        break;
      default:
        break;
    }
  };

  const calculateSubtotal = () => {
    return (
      product1Quantity * 19.99 +
      product2Quantity * 29.99 +
      product3Quantity * 9.99
    );
  };

  const calculateTotal = () => {
    return calculateSubtotal() + 9.99; // Assuming a fixed tax of $9.99
  };

  return (
    <div className="cart-container">
      <div className="cart-section">
        <h2 className="cart-title">Cart Summary</h2>

        {/* Product 1 */}
        <div className="cart-item">
          <div className="cart-item-details">
            <div className="cart-item-image" />
            <div>
              <p className="cart-item-name">Product 1</p>
              <p className="cart-item-price">$19.99 each</p>
            </div>
          </div>
          <div className="cart-controls">
            <button
              onClick={() => handleQuantityChange('product1', product1Quantity - 1)}
              disabled={product1Quantity === 0}
              className="cart-button"
            >
              -
            </button>
            <span>{product1Quantity}</span>
            <button
              onClick={() => handleQuantityChange('product1', product1Quantity + 1)}
              className="cart-button"
            >
              +
            </button>
            <button
              onClick={() => handleQuantityChange('product1', 0)}
              className="cart-button cart-button-danger"
            >
              x
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="cart-item">
          <div className="cart-item-details">
            <div className="cart-item-image" />
            <div>
              <p className="cart-item-name">Product 2</p>
              <p className="cart-item-price">$29.99 each</p>
            </div>
          </div>
          <div className="cart-controls">
            <button
              onClick={() => handleQuantityChange('product2', product2Quantity - 1)}
              disabled={product2Quantity === 0}
              className="cart-button"
            >
              -
            </button>
            <span>{product2Quantity}</span>
            <button
              onClick={() => handleQuantityChange('product2', product2Quantity + 1)}
              className="cart-button"
            >
              +
            </button>
            <button
              onClick={() => handleQuantityChange('product2', 0)}
              className="cart-button cart-button-danger"
            >
              x
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="cart-item">
          <div className="cart-item-details">
            <div className="cart-item-image" />
            <div>
              <p className="cart-item-name">Product 3</p>
              <p className="cart-item-price">$9.99 each</p>
            </div>
          </div>
          <div className="cart-controls">
            <button
              onClick={() => handleQuantityChange('product3', product3Quantity - 1)}
              disabled={product3Quantity === 0}
              className="cart-button"
            >
              -
            </button>
            <span>{product3Quantity}</span>
            <button
              onClick={() => handleQuantityChange('product3', product3Quantity + 1)}
              className="cart-button"
            >
              +
            </button>
            <button
              onClick={() => handleQuantityChange('product3', 0)}
              className="cart-button cart-button-danger"
            >
              x
            </button>
          </div>
        </div>

        <div>
          <p className="cart-summary">Subtotal: ${calculateSubtotal().toFixed(2)}</p>
          <p className="cart-summary">Tax: $9.99</p>
          <p className="cart-summary">Total: ${calculateTotal().toFixed(2)}</p>
        </div>
      </div>

      <div className="checkout-section">
        <h2 className="checkout-title">Checkout</h2>

        <div>
          <label htmlFor="name" className="checkout-label">Name</label>
          <input type="text" id="name" className="checkout-input" />
        </div>

        <div>
          <label htmlFor="email" className="checkout-label">Email</label>
          <input type="email" id="email" className="checkout-input" />
        </div>

        <div>
          <label htmlFor="address" className="checkout-label">Address</label>
          <input type="text" id="address" className="checkout-input" />
        </div>

        <div>
          <label htmlFor="cardNumber" className="checkout-label">Card Number</label>
          <input type="text" id="cardNumber" className="checkout-input" />
        </div>

        <div className="checkout-row">
          <div>
            <label htmlFor="expiryDate" className="checkout-label">Expiry Date</label>
            <input type="text" id="expiryDate" placeholder="MM/YY" className="checkout-input" />
          </div>
          <div>
            <label htmlFor="cvv" className="checkout-label">CVV</label>
            <input type="text" id="cvv" className="checkout-input" />
          </div>
        </div>

        <button className="checkout-button" type="button">
          Place Order (${calculateTotal().toFixed(2)})
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
