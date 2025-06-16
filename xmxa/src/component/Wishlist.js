import React from "react";
import "./Wishlist.css";  // Add styles specific to Wishlist

const Wishlist = ({ isOpen, toggleLike }) => {
  return (
    <>
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="overlay" onClick={toggleLike}></div>

          {/* Wishlist Content */}
          <div className="wishlist-container">
            <div className="wishlist-header">
              <h2>Your Wishlist</h2>
              <button className="close-btn" onClick={toggleLike}>✖</button>
            </div>
            <div className="wishlist-content">
              <p>Your wishlist is empty!</p> {/* Add your wishlist items here */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Wishlist;
