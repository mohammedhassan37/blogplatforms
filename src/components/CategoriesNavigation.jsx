import "../styles/CategoriesNavigation.css";
import { Link } from "react-router-dom";

function CategoriesNavigation() {
  return (
    <>
      <div className="CatNavConCon">
        <div className="CatNavCon">
          <div className="CatNavText">
            <h5 id="CatNavHead">🚀 Explore all pages</h5>
            <h1>Discover All BlogPlatform Pages</h1>
            <p id>
              Navigate through our comprehensive technology platform with
              specialized sections for every tech enthusiast
            </p>
          </div>
          <div className="CatNavBtns">
            <ul>
              <Link to="/AI">
                <li id="CatNavAI">🤖 AI & ML</li>
              </Link>
              <Link to="/Mobile">
                <li id="CatNavMobile">📱 Mobile</li>
              </Link>
              <Link to="/WebDev">
                <li id="CatNavWebDev">💻 Web Dev</li>
              </Link>
              <Link to="/Blockchain">
                <li id="CatNavBlockChain">⛓️ Blockchain</li>
              </Link>
              <Link to="/Gaming">
                <li id="CatNavGaming">🕹️ Gaming</li>
              </Link>
              <Link to="/Technology">
                <li id="CatNavTech">⚙️ Technology</li>
              </Link>
              <Link to="/Reviews">
                <li id="CatNavReviews">⭐ Reviews</li>
              </Link>
              <Link to="/Contact">
                <li id="CatNavContact">📧 Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesNavigation;
