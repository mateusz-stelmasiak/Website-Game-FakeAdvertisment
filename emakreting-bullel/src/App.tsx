import React from 'react';
import './App.css';
import PageHero from "./components/pageHero/pageHero";
import AboutSection from "./components/testSection/aboutSection";
import {Col, Row} from "antd";
import Contact from "./components/contactForm/Contact";
import ReviewsSection from "./components/reviewsSection/reviewsSection";
import FindUsSection from "./components/findUs/FindUsSection";
import InfoSectionRight from "./components/InfoSectionRight/infoSectionRight";
import InfoImageOne from "./assets/chrome_JUkZPz2jkv.png";
import InfoImageTwo from "./assets/chrome_FI1j4IorZ2.png";


import Footer from "./components/footer/footer"

function App() {
    return (
        <Row className="App">
            <PageHero/>
            <Col xxl={{offset: 2, span: 20}} xl={{span: 24, offset: 0}}>
                <AboutSection/>
                <ReviewsSection/>
                <FindUsSection/>
                <Contact/>
                <InfoSectionRight imageSrc={InfoImageTwo} direction={"right"} header={"About Us"}
                                  text={"At Bullel, we're passionate about creating challenging and rewarding games that push the limits of gameplay and storytelling. Our team of dedicated developers works tirelessly to craft unique gaming experiences that are both beautiful and thrilling.\n" +
                                      "We're inspired by the mid-journey art style, and we believe that it adds an extra layer of depth to our games."}/>
                <InfoSectionRight imageSrc={InfoImageOne} direction={"left"} header={"Idk yet"}
                                  text={"Bullel to gra jest gra Bull el to gra jest gra Bu Bullel to gra jest gra " +
                                      "Bullel to gra jest gBullel to gra jest gra ra " +
                                      "Bullel to gBullel to gra jest gra ra jest gra " +
                                      "Bullel to gra jest gra lBullel to gra jest gra Bullel to gra jest gra Bullel to gra jest gra " +
                                      "Bullel to gra jest gra lel to gra jesBullel to gra jest gra t gra "}/>
                <div style={{height: "100px"}}></div>
            </Col>
            <Footer/>
        </Row>
    );
}

export default App;
