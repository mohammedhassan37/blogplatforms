import farts from '../images/Blackflag.svg';

const today = new Date();
const formattedDate = today.toLocaleDateString("en-GB"); // "dd/mm/yyyy"

// Helper function to calculate days ago
function daysAgo(dateString) {
  if (!dateString) return ""; // if no postedDate

  const parts = dateString.split("/"); // ["dd","mm","yyyy"]
  const postDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`); // yyyy-mm-dd

  const diffTime = today - postDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  return `${diffDays} days ago`;
}

// List of articles
const articles = [
  {
    id: 1,
    image: farts,
    title: "title 1",
    tags: "Technology",
    desc: "desc",
    author: "Mohammed Hassan",
    readDur: 5,
    todayDate: formattedDate,
    postedDate: daysAgo("3/09/2025")
  },
  {
    id: 2,
    image: farts,
    title: "title 2",
    tags: "Technology",
    desc: "desc",
    author: "Mohammed Hassan",
    readDur: 5,
    todayDate: formattedDate,
    postedDate: "" // no date yet
  },
  {
    id: 3,
    image: farts,
    title: "title 3",
    tags: "Technology",
    desc: "desc",
    author: "Mohammed Hassan",
    readDur: 5,
    todayDate: formattedDate,
    postedDate: ""
  },
  {
    id: 4,
    image: farts,
    title: "title 4",
    tags: "Technology",
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
    tags: "Technology",
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
    tags: "Technology",
    desc: "desc",
    author: "Mohammed Hassan",
    readDur: 5,
    todayDate: formattedDate,
    postedDate: ""
  }
];

export default articles;
