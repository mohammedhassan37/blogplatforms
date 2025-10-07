import { Link } from "react-router-dom";
import "../styles/CategoriesNavigation.css";

function CategoriesNavigation() {
  return (
    <div className="CatNavMain">
      <div className="CatNavElements">
        <h3>🚀 Explore Platform</h3>
        <h1>Discover All BlogPlatform Pages</h1>
        <p>
          Navigate through our comprehensive technology platform with specialized sections for every tech enthusiast.
        </p>
      </div>

      <div className="CatNavPlacs">
        <Link to="/AI" className="CatCards card-ai">
          <div className="icon">🤖</div>
          <h2>AI & Machine Learning</h2>
          <p>Latest developments in artificial intelligence</p>
        </Link>

        <Link to="/Mobile" className="CatCards card-mobile">
          <div className="icon">📱</div>
          <h2>Mobile Development</h2>
          <p>iOS, Android, and cross-platform solutions</p>
        </Link>

        <Link to="/WebDev" className="CatCards card-web">
          <div className="icon">💻</div>
          <h2>Web Development</h2>
          <p>Frontend, backend, and full-stack guides</p>
        </Link>

        <Link to="/Gaming" className="CatCards card-blockchain">
          <div className="icon">🎮</div>
          <h2>Gaming</h2>
          <p>Decentralized technology insights</p>
        </Link>

        <Link to="/Reviews" className="CatCards card-reviews">
          <div className="icon">⭐</div>
          <h2>Product Reviews</h2>
          <p>In-depth tech product evaluations</p>
        </Link>

       

        <Link to="/Contact" className="CatCards card-contact">
          <div className="icon">✉️</div>
          <h2>Get In Touch</h2>
          <p>Contact our editorial team</p>
        </Link>
      </div>
    </div>
  );
}

export default CategoriesNavigation;
