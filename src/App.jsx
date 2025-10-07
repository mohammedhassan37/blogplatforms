import { Routes, Route } from "react-router-dom";

import './index.css';

import CategoriesNavigation from './components/CategoriesNavigation.jsx'
import Trending from "./components/Trending.jsx";
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ArticleShowcaser from './components/ArticleShowcaser.jsx';

import AI from './Pages/AI.jsx';
import Gaming from "./Pages/Gaming.jsx";
import WebDev from "./Pages/WebDev.jsx";
import Contact from "./Pages/Contact.jsx";
import Mobile from "./Pages/Mobile.jsx";
import Reviews from "./Pages/Reviews.jsx";

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
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/WebDev" element={<WebDev />} />
        <Route path="/Mobile" element={<Mobile />} />
      </Routes>
    </>
  );
}

export default App;
