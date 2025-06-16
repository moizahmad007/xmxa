import React, { useState } from "react";
import Delivery from "./assets/shipping-fast.png";
import Menu from "./assets/menus.png";
import Search from "./assets/search.png";
import Cart from "./assets/trolley.png";
import Loginpage from "./assets/clipboard-user.png";  
import Like from "./assets/like.png";
import Sidebar from "./Sidebar.js";
import SidebarCart from "./SidebarCart.js";
import Searchbar from "./Searchbar.js";  
import Wishlist from "./Wishlist.js";  
import Login from "./Login.js";
import "./Topbar.css";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isLikeOpen, setIsLikeOpen] = useState(false);
  const [categories] = useState(["Book", "Clothes"]);  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);  
    setIsMenuOpen(false);  
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);  
    setIsMenuOpen(false);  
  };

  const toggleLike = () => {
    setIsLikeOpen(!isLikeOpen);  
    setIsMenuOpen(false);  
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);  // Toggle search bar visibility
  };

  const handleSearch = (query, category) => {
    console.log("Searching for:", query, "in category:", category);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="contact-bar">
  <ul>
    <li>
      <img src={Delivery} alt="Delivery Icon" />
      <p>Free Shipping | +923187216752 | xmaxa.pk</p>
    </li>
  </ul>
</div>

      {/* Main Top Bar */}
      <header className="top-bar">
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={Menu} alt="Menu" />
        </div>
        <div className="logo">
          <h1>ჯⱮჯȺ</h1>
        </div>
        <div className="right-icons">
        <div className="login-icon" onClick={toggleLogin}>
          <img src={Loginpage} alt="Login" />
        </div>
        <div className="wish-icon" onClick={toggleLike}>
          <img src={Like} alt="Wishlist" />
        </div>
        <div className="search-icons">
          <img 
            src={Search} 
            alt="Search" 
            className="icon" 
            onClick={toggleSearch}  // Toggle search bar visibility on click
          />
          <div className="cart-icon" onClick={toggleCart}>
            <img src={Cart} alt="Cart" className="icon" />
          </div>
          </div>
        </div>
      </header>

      {/* Search Bar (Conditionally Rendered) */}
      <Searchbar 
        categories={categories} 
        onSearch={handleSearch} 
        isSearchVisible={isSearchVisible} 
        toggleSearch={toggleSearch}
      />

      {/* Conditional Rendering of Sidebars */}
      <Sidebar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <SidebarCart isOpen={isCartOpen} toggleMenu={toggleMenu} toggleCart={toggleCart} />
      <Wishlist isOpen={isLikeOpen} toggleLike={toggleLike} />
      <Login isOpen={isLoginOpen} toggleLogin={toggleLogin} />
    </>
  );
};

export default TopBar;
