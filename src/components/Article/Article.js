import React from "react";
import "./Article.css";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Header";
import PropTypes from 'prop-types';

const Article = ({ getArticle, formatDate, searchInput, setSearchInput }) => {
  const navigate = useNavigate();
  const { index } = useParams();
  const articleIndex = parseInt(index, 10);
  const article = getArticle(articleIndex);
  const articleNotFound = !article;

  const resetSearchInput = () => {
    setSearchInput(""); 
  };

  useEffect(() => {
    if (articleNotFound) {
      navigate("/error");
    }
  }, [articleNotFound, navigate]);

  if (articleNotFound) {
    return null;
  }

  const openArticle = () => {
    window.open(article.url, "_blank", "noopener,noreferrer");
  };

  function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  return (
    <div>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        resetSearchInput={resetSearchInput}
        showBackButton={true}
      />
      <div className="article card">
        <h1 className="article-card-title">{article.title}</h1>
        <img
          className="article-card-image"
          src={article.urlToImage}
          alt={article.title}
        />
        <p className="article-card-date">
          Date: {formatDate(article.publishedAt)}
        </p>
        <p className="article-card-description">{article.content}</p>
        <button onClick={openArticle} className="read-full-article-button">
          Read Full Article
        </button>
        {/* <p className='article-source'>Source: {article.source.name}</p> */}
      </div>
    </div>
  );
};

Article.propTypes = {
  getArticle: PropTypes.func.isRequired,
  formatDate: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired
};

export default Article;


