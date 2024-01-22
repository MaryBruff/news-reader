import React from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const ArticleContainer = ({ articles }) => {
  const articleCards = articles.map((article, index) => {
    const { id, title, urlToImage, description, publishedAt, source, url } =
      article;

    return (
      <Card
        key={id || index}
        index={index}
        title={title}
        image={urlToImage}
        description={description}
        date={publishedAt}
        source={source.name}
        url={url}
      />
    );
  });

  return <main className="article-container">{articleCards}</main>;
};

ArticleContainer.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      urlToImage: PropTypes.string,
      description: PropTypes.string,
      publishedAt: PropTypes.string.isRequired,
      source: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired,
      url: PropTypes.string
    })
  ).isRequired
};

export default ArticleContainer;
