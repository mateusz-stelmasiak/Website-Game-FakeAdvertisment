import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageHero from "./components/pageHero/pageHero";
import Section from "./components/testSection/section";

function App() {
  return (
    <div className="App">
        <PageHero/>
        <Section/>
    </div>
  );
}

export default App;
