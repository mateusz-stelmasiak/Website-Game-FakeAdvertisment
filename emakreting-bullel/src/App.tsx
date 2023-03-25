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
        <Col xxl={{offset:2,span:20}} xl={{span:24, offset:0}}>
            <AboutSection/>
            <ReviewsSection/>
            <FindUsSection/>
            <Contact/>
            <InfoSectionRight imageSrc={InfoImageTwo} direction={"right"} header={"About Us"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim nulla leo, in feugiat\n" +
                "                        felis vehicula elementum. Nulla facilisi. Suspendisse elementum, est eu posuere suscipit, eros\n" +
                "                        quam\n" +
                "                        iaculis elit, a aliquam lacus nibh at nulla. Nam mattis, dui quis hendrerit tempor, nisl felis\n" +
                "                        venenatis sem, vehicula at turpis. Suspendisse dolor lacus, placerat eget\n" +
                "                        rhoncus\n" +
                "                        eget, aliquam non lectus. Aliquam vitae tincidunt turpis. Ut fermentum odio velit, ut\n" +
                "                        sollicitudin"}/>
            <InfoSectionRight imageSrc={InfoImageOne} direction={"left"} header={"Idk yet"} text={"Bullel to gra jest gra Bull el to gra jest gra Bu Bullel to gra jest gra " +
                "Bullel to gra jest gBullel to gra jest gra ra " +
                "Bullel to gBullel to gra jest gra ra jest gra " +
                "Bullel to gra jest gra lBullel to gra jest gra Bullel to gra jest gra Bullel to gra jest gra " +
                "Bullel to gra jest gra lel to gra jesBullel to gra jest gra t gra "}/>
        </Col>
        <Footer/>
    </Row>
  );
}

export default App;
