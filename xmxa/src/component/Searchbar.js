import React, { useState } from "react";
import "./Searchbar.css";  // Include the CSS file for styles

const Searchbar = ({ categories, onSearch, isSearchVisible, toggleSearch }) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleSearch = () => {
    onSearch(query, selectedCategory);
  };

  return (
    <>
      {/* Search Bar Container */}
      <div className={`search-bar-container ${isSearchVisible ? "active" : ""}`}>
        <div className="search-bar">
          <div className="search-header">
            <h2>Search Our Site</h2>
            <button className="close-btn" onClick={toggleSearch}>✖</button> {/* Close button */}
          </div>
          <select
            className="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search                                                 ⌕"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Overlay on Right Side */}
      {isSearchVisible && <div className="overlay" onClick={toggleSearch}></div>}
    </>
  );
};

export default Searchbar;
