import "../styles/TrendingTags.css";

function TrendingTags() {
  const tags = [
    "Tag1",
    "Tag2",
    "Tag1",
    "Tag2",
    "Tag1",
    "Tag2",
    "Tag1",
    "Tag2",
    "Tag1",
    "Tag2",
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
