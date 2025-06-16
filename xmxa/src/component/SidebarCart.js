import React, { useState } from "react";
import "./SidebarCart.css"; // Import the updated CSS
import CartLogo from "./assets/remove-to-cart.png";
const SidebarCart = ({ isOpen, toggleMenu, toggleCart }) => {
  const [rotated, setRotated] = useState(false);

  // Function to handle close button click
  const handleCrossClick = () => {
    setRotated(!rotated); // Toggle the rotation
    toggleCart();  // Close the cart when the cross is clicked
  };

  return (
    <>

      <div className={`sidebarCart ${isOpen ? "open" : ""}`}>
        <div className="cart-view">
          <li className="cart-view-top">
          <h2>Shopping Cart</h2>
          <button className={`close-btn ${rotated ? "rotated" : ""}`}  onClick={handleCrossClick}>✖</button>
          </li>
           <div className="cart-logo">
            <img src={CartLogo} alt="Cart Logo" />
          </div>
          <p>Your cart is empty.</p>
          <button className="return-to-shop" onClick={toggleMenu}>Return to Shop → </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleCart}></div>}
    </>
  );
};

export default SidebarCart;
