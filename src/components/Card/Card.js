import React from "react";
import "./Card.css";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ index, title, image, description, date, source, url }) => {

  function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  const openExternalArticle = (event) => {
    event.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };


  return (
    <Link className="no-underline article-card" to={`/Article/${index}`}>
      <div className="card">
        <img src={image} className="article-card-image" alt={title} />
        <div className="article-card-info">
          <p className="article-card-title">{title}</p>
          <p className="article-card-description">{description}</p>
          <p className="article-card-date">{formatDate(date)}</p>
          <p className="article-card-source">Source: {source}</p>
          <button onClick={openExternalArticle} className="external-article-button">
          Read Full Article
        </button>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Card;
