import { Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ArticleShowcaser from './components/ArticleShowcaser.jsx';
import AI from './Pages/AI.jsx';
import './index.css';
import Technology from './Pages/Technology.jsx'
import CategoriesNavigation from './components/CategoriesNavigation.jsx'
import Trending from "./components/Trending.jsx";

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
              <CategoriesNavigation/>
              <Trending/>
              <ArticleShowcaser />
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
