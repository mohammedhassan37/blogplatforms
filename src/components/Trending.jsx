import "../styles/Trending.css";
import { countCategories } from "../Data/CategoriesData.js";
import articles from "../Data/ArticleData.js";

function Trending() {
  const { ai, mobile, websiteDev, gaming, reviews } = countCategories();
  const tags = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "GraphQL",
    "Vue.js",
    "MongoDB",
  ];

  return (
    <>
     <div className="farts">
        <h3>Discover & Explore</h3>
        <h1>Your Tech Knowledge Hub</h1>
        <p>
          Stay ahead with curated content, trending topics, and the latest industry insights
        </p>
      </div>
      <div className="TrendingContainer">
        <div className="CatMainContainer Categories">
          <p>
            <span id="CategoriesIcon">☰</span> Categories
          </p>
          <ul>
            <li>
              Artificial Intelligence <span id="span">{ai}</span>
            </li>
            <li>
              Mobile Development <span>{mobile}</span>
            </li>
            <li>
              Website Development <span>{websiteDev}</span>
            </li>
            <li>
              Gaming <span>{gaming}</span>
            </li>
            <li>
              Reviews <span>{reviews}</span>
            </li>
          </ul>
        </div>
        <div className="CatMainContainer PopTW">
          <p>
            <span id="PopTWIcon">📈</span> Popular This Week
          </p>
          {articles.slice(0, 3).map((article, index) => (
            <div className="PopArticle" key={index}>
              <a href="#"> 
                {/* use slugging to get the url */}
                <p className="PopArtTitle">{article.title}</p>
              </a>
              <span className="PopInfo">
                <p id="PopArtDur">{article.readDur} min read</p><p id="PTWdot">•</p><p id="PopArtPost">{article.postedDate}</p>
              </span>
            </div>
          ))}
        </div>
        <div className="CatMainContainer Tags">
          <p>
            <span id="TagsIcon">🏷️</span> Trending Tags
          </p>
          <div className="TagsContainer">
            {tags.slice(0, 10).map((tag, index) => (
              <div key={index} className="TrendingTags">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Trending;
