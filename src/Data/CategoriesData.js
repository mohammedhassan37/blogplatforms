// utils/countCategories.js
import ArticleData from "../Data/ArticleData.js";

export function countCategories() {
  const counts = {
    ai: 0,
    mobile: 0,
    websiteDev: 0,
    gaming: 0,
    tech: 0,
    cloud: 0,
  };

  ArticleData.forEach((article) => {
    article.tags.forEach((tag) => {
      switch (tag) {
        case "AI":
          counts.ai++;
          break;
        case "Mobile":
          counts.mobile++;
          break;
        case "Web dev":
          counts.websiteDev++;
          break;
        case "Gaming":
          counts.gaming++;
          break;
        case "Technology":
          counts.tech++;
          break;
        case "Cloud":
          counts.cloud++;
          break;
        default:
          break;
      }
    });
  });

  return counts;
}
