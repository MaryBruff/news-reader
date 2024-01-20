import React from 'react';
import ArticleCard from './ArticleCard'; // Make sure this is correctly imported
import './ArticleContainer.css';

const ArticleContainer = ({ articles }) => {
  const articleCards = articles.map((article, index) => {
    const { id, headline, img, description } = article;

    return (
      <ArticleCard
        key={index}
        id={id} // Use destructured variables
        headline={headline}
        img={img}
        description={description}
      />
    );
  });

  return <section className="article-container">{articleCards}</section>;
};

export default ArticleContainer;
