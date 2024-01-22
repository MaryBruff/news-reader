export async function getArticles() {
  const apiKey = process.env.REACT_APP_API_KEY;
  return await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => console.log(error))
}  


