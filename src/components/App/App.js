import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import Article from "../Article/Article";
import { sampleData } from "../SampleData";
import { getArticles } from "../Api-calls";
import Error from "../Error/Error";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [articles, setArticles] = useState({ articles: [] });
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    getArticles()
      .then((data) => {
        const filteredArticles = data.articles.filter(article => article.urlToImage && article.content);
        setArticles({ articles: filteredArticles });
        setError(false);
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setErrorMessage("Failed to fetch articles. Please try again later.");
      });
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
          element={
          <Article 
          getArticle={getArticle} 
          formatDate={formatDate}
          searchInput={searchInput} 
          setSearchInput={setSearchInput} 
          />}
        />
        <Route path="/error" element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;
