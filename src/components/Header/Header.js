import "./Header.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Header = ({ searchInput, setSearchInput, resetSearchInput, showBackButton }) => {
  const [searchArticle, setSearchArticle] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchInput(searchArticle.toLowerCase());
    setSearchArticle("");
  };

  const goBack = () => {
    navigate('/'); // Navigate back to the homepage
  };

  return (
    <header className="vintage-header">
    <h1 className="vintage-header-title">Top Story Gazette</h1>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search by Source"
            value={searchArticle}
            onChange={(event) => setSearchArticle(event.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
          {showBackButton && (
            <button className="go-back" onClick={goBack}>Back</button>
          )}
        </form>
      </div>
    </header>
  );
};

export default Header;
