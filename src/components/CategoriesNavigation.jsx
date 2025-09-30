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
                        <li id="CatNavAI">
                            <Link to="/AI" >🤖 AI & ML</Link>
                        </li>
                        <li id="CatNavMobile">
                            <Link to="/Mobile" >📱 Mobile</Link>
                        </li>
                        <li id="CatNavWebDev">
                            <Link to="/AI">💻 Web Dev</Link>
                        </li>
                        <li id="CatNavBlockChain">
                            <Link to="/AI">⛓️ Blockchain</Link>
                        </li>
                        <li id="CatNavGaming">
                            <Link to="/AI" >🕹️ Gaming</Link>
                        </li>
                        <li id="CatNavTech">
                            <Link to="/AI" >⚙️ Technology</Link>
                        </li>
                        <li id="CatNavReviews">
                            <Link to="/AI" >⭐ Reviews</Link>
                        </li>
                        <li id="CatNavContact">
                            <Link to="/AI" >📧 Contact</Link>
                        </li>
                    </ul>
                </div>
        </div>
    </>
)
}

export default CategoriesNavigation;
