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
import LogoButton from "./components/pageHero/logoButton";
import OurGameSection from "./components/ourGamesSection/ourGamesSection";

function App() {
    return <>
        <Row className="App">
            <PageHero/>
            <LogoButton/>
            <Col xxl={{offset: 2, span: 20}} xl={{span: 24, offset: 0}}>
                <AboutSection/>
                <ReviewsSection/>

                <InfoSectionRight imageSrc={InfoImageTwo} direction={"right"} header={"About Us"}
                                  text={"At Bullel, we're passionate about creating challenging and rewarding games that push the limits of gameplay and storytelling. Our team of dedicated developers works tirelessly to craft unique gaming experiences that are both beautiful and thrilling.\n" +
                                      "We're inspired by the mid-journey art style, and we believe that it adds an extra layer of depth to our games."}/>
                <OurGameSection/>
                <InfoSectionRight imageSrc={InfoImageOne} direction={"left"} header={"Midjourney"}
                                  text={"At Bullel, we're always pushing the boundaries of what's possible in game development. That's why we chose to use Mid-Journey AI to generate our game assets. This powerful tool allows us to create stunning, high-quality visuals that immerse players in our dark fantasy world like never before. With Mid-Journey AI, we're able to generate detailed, lifelike environments and characters that truly bring our game to life."}/>
                <div style={{height: "100px"}}></div>
                <Contact/>
                <FindUsSection/>
            </Col>
        </Row>
        <Footer/>
    </>
}

export default App;
