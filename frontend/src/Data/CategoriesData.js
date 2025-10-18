// utils/countCategories.js
import ArticleData from "./ArticleData.js";

export function countCategories() {
  const counts = {
    ai: 0,
    mobile: 0,
    web: 0,
    gaming: 0,
    reviews: 0
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
        case "Web":
          counts.web++;
          break;
        case "Gaming":
          counts.gaming++;
          break;
        case "Reviews":
          counts.reviews++;
          break;
        default:
          break;
      }
    });
  });

  return counts;
}
