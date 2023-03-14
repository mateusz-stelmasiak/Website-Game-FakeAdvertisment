import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageHero from "./components/pageHero/pageHero";
import AboutSection from "./components/testSection/aboutSection";

function App() {
  return (
    <div className="App">
        <PageHero/>
        <AboutSection/>
    </div>
  );
}

export default App;
