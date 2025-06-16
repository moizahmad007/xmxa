import React, { useState } from "react";
import Arrowdown from "./assets/arrowup.png";
import Arrowup from "./assets/arrowdown.png";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleMenu }) => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);

  const handleShowMore1 = () => {
    setShowMore1(!showMore1);
    setShowMore2(false);
    setShowMore3(false);
  };

  const handleShowMore2 = () => {
    setShowMore2(!showMore2);
    setShowMore1(false);
    setShowMore3(false);
  };

  const handleShowMore3 = () => {
    setShowMore3(!showMore3);
    setShowMore1(false);
    setShowMore2(false);
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Menu</h2>
        <button className="close-btn" onClick={toggleMenu}>✖</button>
        <ul>
          <li className="first-menu">
            <a href="#shoping">Shopping</a>
            <button className="plus-btn" onClick={handleShowMore1}>
              <img
                src={showMore1 ? Arrowdown : Arrowup}
                alt={showMore1 ? "Collapse" : "Expand"}
                className="arrow-icon"
              />
            </button>
          </li>
          {showMore1 && (
            <div className="first-menu-content">
              <ul>
                <li><a href="#portfolio">Men</a></li>
                <li><a href="#blog">Women</a></li>
                <li><a href="#faq">Kids</a></li>
              </ul>
            </div>
          )}
          <li className="second-menu">
            <a href="#skincare">Skin Care</a>
            <button className="plus-btn" onClick={handleShowMore2}>
              <img
                src={showMore2 ? Arrowdown : Arrowup}
                alt={showMore2 ? "Collapse" : "Expand"}
                className="arrow-icon"
              />
            </button>
          </li>
          {showMore2 && (
            <div className="second-menu-content">
              <ul>
                <li><a href="#portfolio">Serum</a></li>
                <li><a href="#blog">Instant Glow</a></li>
                <li><a href="#faq">Bundle</a></li>
              </ul>
            </div>
          )}
          <li className="third-menu">
            <a href="#wellness">Wellness</a>
            <button className="plus-btn" onClick={handleShowMore3}>
              <img
                src={showMore3 ? Arrowdown : Arrowup}
                alt={showMore3 ? "Collapse" : "Expand"}
                className="arrow-icon"
              />
            </button>
          </li>
          {showMore3 && (
            <div className="third-menu-content">
              <ul>
                <li><a href="#portfolio">Body Health</a></li>
                <li><a href="#blog">Acne</a></li>
                <li><a href="#faq">heath care</a></li>
              </ul>
            </div>
          )}
          <div className="last-menu">
            <li><p>Need Help?</p></li>
            <li><a href="#contact">✆ +923187216752</a></li>
          </div>
        </ul>
      </div>
      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Sidebar;
