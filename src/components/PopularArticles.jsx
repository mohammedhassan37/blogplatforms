import articles from "../Data/ArticleData.js";
import '../styles/PopularArticles.css'

function PopularArticles() {
  return (
    <>
    <div className="PopArt">
      <p>Popular This week</p>
      {articles.slice(0,3).map((article) =>
            <div>
              <h1 id="PopArtTitle">{article.title}</h1>
              <p id="PopArtDur">{article.readDur} Min read</p>
              <p id="PopArtPost">{article.postedDate}</p>

            </div>
    )}
    </div>
    </>
  );
}

export default PopularArticles;
