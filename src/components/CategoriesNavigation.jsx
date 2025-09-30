import '../styles/CategoriesNavigation.css'
import { Link } from "react-router-dom";

function CategoriesNavigation(){
return(
    <>
        <div className="CatNavCon">
            <h1 id="CatNavHead">🚀 Explore all pages</h1>
            <p id="CatNavText">Click on any of these buttons to see the different pages I've created for the BlogPost platform:</p>
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
    </>
)
}

export default CategoriesNavigation;
