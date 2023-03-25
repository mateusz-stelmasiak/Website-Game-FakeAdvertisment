import React from 'react';
import './App.css';
import PageHero from "./components/pageHero/pageHero";
import AboutSection from "./components/testSection/aboutSection";
import {Col, Row} from "antd";
import Contact from "./components/contactForm/Contact";
import ReviewsSection from "./components/reviewsSection/reviewsSection";
import FindUsSection from "./components/findUs/FindUsSection";
import Footer from "./components/footer/footer"
function App() {
  return (
    <Row className="App">
        <PageHero/>
        <Col xxl={{offset:2,span:20}} xl={{span:24, offset:0}}>
            <AboutSection/>
            <ReviewsSection/>
            <FindUsSection/>
            <Contact/>
        </Col>
        <Footer/>
    </Row>
  );
}

export default App;
