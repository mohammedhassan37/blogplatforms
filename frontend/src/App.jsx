import { Routes, Route } from "react-router-dom";

import './index.css';

import CategoriesNavigation from './components/CategoriesNavigation.jsx'
import Trending from "./components/Trending.jsx";
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ArticleShowcaser from './components/ArticleShowcaser.jsx';

import AI from './Pages/AI.jsx';
import Gaming from "./Pages/Gaming.jsx";
import Web from "./Pages/Web.jsx";
import Contact from "./Pages/Contact.jsx";
import Mobile from "./Pages/Mobile.jsx";
import Reviews from "./Pages/Reviews.jsx";

import Test from './Pages/Test.jsx'

function App() {
  return (
    <>
     

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

        
        <Route path="/AI" element={<AI />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/Web" element={<Web />} />
        <Route path="/Mobile" element={<Mobile />} />
         <Route path="/Test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
