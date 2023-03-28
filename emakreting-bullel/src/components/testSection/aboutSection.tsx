import "./aboutSection.css"
import {Row, Col, Button} from "antd";
import AboutImage from "../../assets/chrome_4T6Fo21uL7.png"

export default function AboutSection() {
    let scrollToSection = (sectionId: string) => {
        let section = document.getElementById(sectionId);
        if (!section) {
            //is not a section but url
            if (sectionId.includes("/")) {
                window.location.href = `${sectionId}`
                return;
            }
            window.location.href = `/#${sectionId}`
            return;
        }
        section.scrollIntoView({behavior: "smooth", block: "center"})
    }

    return <div id={"about"} style={{marginTop: 0, marginBottom: 150}}>
        <div className={"infoText"}>
            <Button className={"infoButton"} onClick={() => scrollToSection("about")}>about&nbsp;</Button> | <Button
            className={"infoButton"} onClick={() => scrollToSection("reviews")}>&nbsp;reviews&nbsp;</Button> | <Button
            className={"infoButton"} onClick={() => scrollToSection("contact")}>&nbsp;contact</Button>
        </div>
        <Row className={"aboutSectionWrapper"}>
            <Col sm={{span: 24, order: 1}} xl={{span: 11}} xxl={{span: 8}} className={"aboutColumn"}>
                <img src={AboutImage} className={"aboutImageContainer"}/>
            </Col>
            <Col xl={{span: 13, order: 0}} xxl={{span: 16}} className={"aboutColumn"}>
                <div className={"aboutText"}>
                    <div className={"aboutHeader"}>
                        ABOUT
                        <div className={"aboutHeaderDecoration"}>
                            ABOUT
                        </div>
                    </div>
                    <div className={"aboutDescription"}>
                        Welcome to our bullet hell game with a twist! Inspired by mid-journey art and set in a
                        dark-fantasy world, our game is designed to push your skills to the limit. With challenging
                        gameplay and puzzles that will test your problem-solving abilities, this game is not for the
                        faint-hearted.
                        <br/>
                        <br/>
                        We've designed our game to be challenging yet rewarding. Every level is hand-crafted to provide
                        a unique and satisfying experience for players. Our team is dedicated to making sure that our
                        game is polished and finely-tuned, so you can be sure that you're getting the best possible
                        experience.
                    </div>
                </div>
            </Col>
        </Row>
    </div>
}
