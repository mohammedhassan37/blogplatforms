import { Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ArticleShowcaser from './components/ArticleShowcaser.jsx';
import CategoriesShowcaser from './components/CategoriesShowcaser.jsx';
import PoularArticls from './components/PopularArticles.jsx';
import AI from './Pages/AI.jsx';
import './index.css';
import Technology from './Pages/Technology.jsx'
import TrendingTags from "./components/TrendingTags.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ArticleShowcaser />
              <CategoriesShowcaser />
              <PoularArticls />
              <TrendingTags></TrendingTags>
            </>
          }
        />

        {/* AI Page */}
        <Route path="/AI" element={<AI />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/AI" element={<AI />} />
      </Routes>
    </>
  );
}

export default App;
