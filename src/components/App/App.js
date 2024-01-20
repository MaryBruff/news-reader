import './App.css';
import React, { useEffect } from 'react';
import getArticles from '../Api-calls';


function App() {


useEffect(() => {
  getArticles()
  .then(data => console.log(data))
  .catch(error => console.log(error))
} , [])


  return (
    <div className="App">

    </div>
  );
}

export default App;
