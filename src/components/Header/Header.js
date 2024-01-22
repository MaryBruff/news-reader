import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({
  searchInput,
  setSearchInput,
  resetSearchInput,
  showBackButton,
}) => {
  const [searchArticle, setSearchArticle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const validateInput = (input) => {
    if (input.trim() === "") {
      setErrorMessage("Search input cannot be empty.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (validateInput(searchArticle)) {
      setSearchInput(searchArticle.toLowerCase());
      setSearchArticle("");
    }
  };

  const goBack = () => {
    try {
      resetSearchInput();
      navigate("/");
    } catch (error) {
      console.error("Navigation error:", error);
      setErrorMessage("Error navigating back to the homepage.");
    }
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
            <button className="go-back" onClick={goBack}>
              Back
            </button>
          )}
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}{" "}
      </div>
    </header>
  );
};

Header.propTypes = {
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
  resetSearchInput: PropTypes.func,
  showBackButton: PropTypes.bool,
};

export default Header;
