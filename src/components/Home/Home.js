import React from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Home = ({
  filterArticles,
  searchInput,
  setSearchInput,
  resetSearchInput,
}) => {
  const [noResultsError, setNoResultsError] = useState(false);
  const articles = filterArticles();

  useEffect(() => {
    if (searchInput && articles.length === 0) {
      setNoResultsError(true);
    } else {
      setNoResultsError(false);
    }
  }, [searchInput, articles]);

  const showBackButton = searchInput.length > 0;

  return (
    <main className="home">
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        resetSearchInput={resetSearchInput}
        showBackButton={showBackButton}
      />
      {noResultsError && (
        <div className="error-message">
          No articles found matching the search criteria.
        </div>
      )}
      <ArticleContainer articles={articles} />
    </main>
  );
};

Home.propTypes = {
  filterArticles: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
  resetSearchInput: PropTypes.func.isRequired,
};

export default Home;
