import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Article from "../Article/Article";
// import { sampleData } from "../SampleData";
import { getArticles } from "../Api-calls";


function App() {
  const location = useLocation();
  const [articles, setArticles] = useState({ articles: [] });

  const [searchInput, setSearchInput] = useState("");


  useEffect(() => {
    getArticles()
      .then(data => {
        setArticles(data); 
      })
      .catch(error => console.log(error));
  }, []);
  


  useEffect(() => {
    resetSearchInput();
  }, [location]); 

  const resetSearchInput = () => {
    setSearchInput("");
  };

  const filterArticles = () => {
    return articles.articles.filter((article) => {
      return article.source.name.toLowerCase().includes(searchInput);
    });
  };

  const getArticle = (index) => {
    return articles.articles[index];
  };

  return (
    <main className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              filterArticles={filterArticles}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              resetSearchInput={resetSearchInput} 
            />
          }
        />
        <Route
          path="/Article/:index"
          element={<Article getArticle={getArticle} />}
        />
      </Routes>
    </main>
  );
}

export default App;
