import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Article from "../Article/Article";
import { sampleData } from "../SampleData";

function App() {
  const [articles, setArticles] = useState(sampleData);
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   getArticles()
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error))
  // } , [])

  const filterArticles = () => {
    return articles.articles.filter((article) => {
      return article.title.toLowerCase().includes(searchInput.toLowerCase());
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
