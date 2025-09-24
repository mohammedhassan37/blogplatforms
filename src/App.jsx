import { Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ArticleShowcaser from './components/ArticleShowcaser.jsx';
import CategoriesShowcaser from './components/CategoriesShowcaser.jsx';
import PoularArticls from './components/PopularArticles.jsx';
import Meow from './Pages/Meow.jsx';
import './index.css';

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
            </>
          }
        />

        {/* Meow Page */}
        <Route path="/meow" element={<Meow />} />
      </Routes>
    </>
  );
}

export default App;
