import { Link } from "react-router-dom";
import '../styles/Header.css';

function Header() {
  return (
    <div className='header-container'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AI">AI & ML</Link></li>
        <li><Link to="/Mobile">Mobile</Link></li>
        <li><Link to="/Web">Web Dev</Link></li>
        <li><Link to="/Gaming">Gaming</Link></li>
        <li><Link to="Reviews">Reviews</Link></li>
      </ul>
      <input type="text" className='input-search' placeholder='Search articles...' />
    </div>
  );
}

export default Header;
