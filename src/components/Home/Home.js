import React from 'react'
import './Home.css'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import Header from '../Header/Header'

const Home = ({ filterArticles, searchInput, setSearchInput, resetSearchInput }) => {

  return (
    <main className="home">
      <Header 
      searchInput={searchInput} 
      setSearchInput={setSearchInput}
      resetSearchInput={resetSearchInput}
       />
      <ArticleContainer articles={filterArticles()} />
    </main>
  )
}

export default Home