import { useEffect, useState } from "react";

function Test() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/articles")  // make sure the slash is there
      .then(res => res.json())
      .then(data => setArticles(data))  // store the array directly
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Articles from API:</h1>
      {articles.length === 0 ? (
        <p>Loading...</p>
      ) : (
        articles.map(article => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.desc}</p>
            <p>Author: {article.author}</p>
            <p>Read duration: {article.read_dur} min</p>
            <p>Posted: {article.posted_date}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Test;
