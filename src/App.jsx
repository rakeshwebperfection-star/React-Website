import { useState } from 'react'
import './App.css'
import Header from './components/header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ProjectSection from './components/ProjectSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main-content'>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProjectSection />
      </main>
    </div>
  );
}

export default App;
