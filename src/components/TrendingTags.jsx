import "../styles/TrendingTags.css";

function TrendingTags() {
  const tags = [
    "react",
    "farts",
    "apple",
    "meow",
    "fent",
    "farts",
    "mama",
    "meow",
    "farts",
    "poops",
  ];

  return (
    <>
      <div className="TTcontainer">
        <p id="TTCtitle">Trending Tags</p>
        <div className="TTelements">
          {tags.slice(0, 10).map((tag,index) => (
            <div key={index} className="TTCtags">{tag}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrendingTags;
