// components/ArticleListByTag.jsx
import articles from '../Data/ArticleData.js';

function ArticleListByTag({ tag }) {
  const filtered = articles.filter(article => article.tags.includes(tag));

  return (
     <div className="articlesShowcase">
          <div className="placcard">
            {filtered.map((article) => (
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
  );
}

export default ArticleListByTag;
