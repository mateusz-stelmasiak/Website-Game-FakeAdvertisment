import React from 'react';
import './App.css';
import PageHero from "./components/pageHero/pageHero";
import AboutSection from "./components/testSection/aboutSection";
import {Col, Row} from "antd";

function App() {
  return (
    <Row className="App">
        <Col xxl={{offset:2,span:20}} xl={{span:24, offset:0}}>
        <PageHero/>
        <AboutSection/>
        </Col>
    </Row>
  );
}

export default App;
