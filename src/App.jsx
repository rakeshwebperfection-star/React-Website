import { Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ProjectSection from './components/ProjectSection';
import OtherProjects from './components/OtherProjects';
import GetTouch from './components/GetTouch';

import Home1 from "./pages/Home1";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home / Landing Page */}
        <Route
          path="/"
          element={
            <main className="main-content">
              <Header />
              <HeroSection />
              <AboutSection />
              <WorkSection />
              <ProjectSection />
              <OtherProjects />
              <GetTouch />
            </main>
          }
        />

        {/* Home1 Page */}
        <Route path="/home1" element={<Home1 />} />
        
      </Routes>
    </div>
  );
}

export default App;
