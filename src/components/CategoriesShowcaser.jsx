import "../styles/CategoriesShowcaser.css";
import { countCategories } from "../data/CategoriesData.js"; // imports function to count

function CategoriesShowcaser() {
  const { ai, mobile, websiteDev, gaming, cloud, tech } = countCategories();
  // Calls countCategories(), then destructures the returned object so each variable
  // (ai, mobile, websiteDev, gaming, cloud, tech) gets its corresponding value.

  return (
    <>
      <div className="catSCon ">
        {/* useless comment  */}
        <p className="catHead">Categories</p> 
        <ul>
          <li>
            <span>
              <a href="">Artificial Intelligence & Machine Learning</a>
              <p id="articleAmounts">{ai}</p>
            </span>
          </li>
          <li>
            <span>
              <a href="">Cloud</a>
              <p id="articleAmounts">{cloud}</p>
            </span>
          </li>
          <li>
            <span>
              <a href="">Mobile</a>
              <p id="articleAmounts">{mobile}</p>
            </span>
          </li>
          <li>
            <span>
              <a href="">Website Development</a>
              <p id="articleAmounts">{websiteDev}</p>
            </span>
          </li>
          <li>
            <span>
              <a href="">Gaming</a>
              <p id="articleAmounts">{gaming}</p>
            </span>
          </li>
          <li>
            <span>
              <a href="">Technology</a>
              <p id="articleAmounts">{tech}</p>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CategoriesShowcaser;
