import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Article from '../Article/Article';
import { sampleData } from '../SampleData';


function App() {
const [articles, setArticles] = useState(sampleData)

console.log("articles", articles);
console.log("sampleData", sampleData);


// useEffect(() => {
//   getArticles()
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
// } , [])


  return (
    <div className="App">

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:articleId" element={<Article />} />
      </Routes>

    </div>
  );
}

export default App;
