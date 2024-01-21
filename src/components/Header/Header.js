// import React from 'react'
import "./Header.css";
import { useState } from "react";

const Header = ({ searchInput, setSearchInput }) => {
  const [searchArticle, setSearchArticle] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchInput(searchArticle);
    setSearchArticle("");
  };
  return (
    <header className="vintage-header">
      <h1>Ye Olde Shoppe</h1>

      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search Articles"
            value={searchArticle}
            onChange={(event) => setSearchArticle(event.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
