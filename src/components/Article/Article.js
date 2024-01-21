import React from 'react'
import './Article.css'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import { useParams } from 'react-router-dom'

const Article = ({ getArticle, formatDate }) => {
  const { index } = useParams();
  const articleIndex = parseInt(index, 10); 
  const article = getArticle(articleIndex);


  const openArticle = () => {
    window.open(article.url, '_blank', 'noopener,noreferrer');
  };

  
  function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }
  return (
    <div className='article card'> {/* Add 'card' class if you want to apply card styles directly */}
      <h1 className='article-card-title'>{article.title}</h1>
      <img className='article-card-image' src={article.urlToImage} alt={article.title} />
      <p className='article-card-date'>Date: {formatDate(article.publishedAt)}</p>
      <p className='article-card-description'>{article.content}</p>
      {/* <a href={article.url} target="_blank" rel="noopener noreferrer" className='read-full-article'>Read Full Article</a> */}
      <button onClick={openArticle} className='read-full-article-button'>Read Full Article</button>
      <p className='article-source'>Source: {article.source.name}</p>

    </div>
  );
}

export default Article


