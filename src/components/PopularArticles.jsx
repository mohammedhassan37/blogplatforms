import articles from "../Data/ArticleData.js";
import '../styles/PopularArticles.css'

function PopularArticles() {
  return (
    <>
    <div className="PopArt">
      <p className="PopArtTitle">Popular This week</p>
      {articles.slice(0,3).map((article) =>
            <div>
              <a href=""><h1 id="PopArtTitle">{article.title}</h1></a>
             <span className="PopInfo"> <p id="PopArtDur">{article.readDur} min read</p>
              <p id="PopArtPost">{article.postedDate}</p>
              </span>
              <hr />
            </div>
    )}
    </div>
    </>
  );
}

export default PopularArticles;
