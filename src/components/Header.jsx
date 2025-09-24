import '../styles/Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className='header-container'>
        <ul>
          <li><Link to="/" id='header-container-home'>Home</Link></li>
          <li><Link to="/Meow">Meow</Link></li>
          <li><Link to="/mobile">Mobile</Link></li>
          <li><Link to="/web-dev">Web Dev</Link></li>
          <li><Link to="/gaming">Gaming</Link></li>
          <li><Link to="/technology">Technology</Link></li>
        </ul>
        <input type="text" className='input-search' placeholder='Search articles...' />
      </div>
    </>
  );
}

export default Header;
