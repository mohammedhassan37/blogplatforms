import articles from "../Data/ArticleData.js";
import '../styles/PopularArticles.css'

function PopularArticles() {
  return (
    <>
    <div className="PopArt">
      {articles.slice(0,3).map((article) =>
        <div className="PopArtContent">
            <h1 id="PopArtTitle">{article.title}</h1>
            <hr />
            <p id="PopArtDur">{article.readDur} Min read</p>
            hr
            <p id="PopArtPost">{article.postedDate}</p>
        </div>
    )}
    </div>
    </>
  );
}

export default PopularArticles;
