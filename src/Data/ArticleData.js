import cloud from "../images/160252.jpg";
import farts from "../images/Blackflag.svg";

const today = new Date();
const formattedDate = today.toLocaleDateString("en-GB"); 

function daysAgo(dateString) {
  if (!dateString) return ""; 

  const parts = dateString.split("/"); 
  const postDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`); 

  const diffTime = today - postDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 Day ago";
  return `${diffDays} Days ago`;
}

const articles = [
  {
    id: 1,
    image: cloud,
    title: "Cloud Infrastructure at Scale: AWS vs Azure vs Google Cloud",
    tags: ["Cloud"],   
    desc: "A comprehensive comparison of the three major cloud providers, their services, pricing, and which one might be right for your next project.",
    author: "Mohammed Hassan",
    readDur: 5,
    todayDate: formattedDate,
    postedDate: daysAgo("3/09/2025"),
    articleLink: "",
  },
  {
    id: 2,
    image: farts,
    title: "Iphone 17 has been released, but is there any benefits?",
    tags: ["Technology"],
    desc: "desc",
    author: "Mohammed Hassan",
    readDur: 5,
    todayDate: formattedDate,
    postedDate: daysAgo("10/9/2025")
  },
  {
    id: 3,
    image: farts,
    title: "Samsung is shilling for israel?",
    tags: ["Technology"],
    desc: "desc",
    author: "Mohammed Hassan",
    readDur: 5,
    todayDate: formattedDate,
    postedDate: daysAgo("14/09/2025")
  },
  {
    id: 4,
    image: farts,
    title: "title 4",
    tags: ["AI"],
    desc: "desc",
    author: "Mohammed Hassan",
    readDur: 5,
    todayDate: formattedDate,
    postedDate: ""
  },
  {
    id: 5,
    image: farts,
    title: "title 5",
    tags: ["AI"],
    desc: "desc",
    author: "Mohammed Hassan",
    readDur: 5,
    todayDate: formattedDate,
    postedDate: ""
  },
  {
    id: 6,
    image: farts,
    title: "title 6",
    tags: ["Technology"],
    desc: "desc",
    author: "Mohammed Hassan",
    readDur: 5,
    todayDate: formattedDate,
    postedDate: ""
  }
];

export default articles;
