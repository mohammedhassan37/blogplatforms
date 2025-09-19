import "../styles/ArticleShowcaser.css";
import articles from "../data/data.js";

function ArticleShowcaser() {
  return (
    <>
      <div className="ArticleDisplayer">
        <span className="articleTop">
          <p id="articleTitle">Latest Articles</p>
          <a href="" id="articleView">
            View All
          </a>
        </span>
        <div className="articlesShowcase">
          <div className="placcard">
            {articles.map((article) => (
              <div key={article.id} className="articleCard">
                <img src={article.image} alt={article.title} />
                <div className="content">
                  <p id="showcaseTag">{article.tags}</p>
                  <h2 id="showcaseTitle">{article.title}</h2>
                  <p id="showcaseDesc" className="text-color">
                    {article.desc}
                  </p>
                  <span className="showAuthor text-color">
                    <p className="showAuthorAuthor">By {article.author}</p>
                    <span className="showAuthorRight">
                      <p>• {article.readDur} min read</p>
                      <p>• {article.postedDate}</p>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleShowcaser;
