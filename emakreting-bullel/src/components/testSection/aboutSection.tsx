import "./aboutSection.css"
import {Row, Col, Button} from "antd";
import AboutImage from "../../assets/chrome_4T6Fo21uL7.png"

export default function AboutSection() {

    return <div style={{marginTop: 200}}>
        <div className={"infoText"}>
            <Button className={"infoButton"}>about&nbsp;</Button> | <Button
            className={"infoButton"}>&nbsp;reviews&nbsp;</Button> | <Button
            className={"infoButton"}>&nbsp;contact</Button>
        </div>
        <Row className={"aboutSectionWrapper"}>
            <Col span={8} className={"aboutColumn"}>
                    <img src={AboutImage} className={"aboutImageContainer"}/>
            </Col>
            <Col span={16} className={"aboutColumn"}>
                <div className={"aboutText"}>
                    <div className={"aboutHeader"}>
                        ABOUT
                        <div className={"aboutHeaderDecoration"}>
                            ABOUT
                        </div>
                    </div>
                    <div className={"aboutDescription"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim nulla leo, in feugiat
                        felis vehicula elementum. Nulla facilisi. Suspendisse elementum, est eu posuere suscipit, eros
                        quam
                        iaculis elit, a aliquam lacus nibh at nulla. Nam mattis, dui quis hendrerit tempor, nisl felis
                        venenatis sem, vehicula cursus diam sem at turpis. Suspendisse dolor lacus, placerat eget
                        rhoncus
                        eget, aliquam non lectus. Aliquam vitae tincidunt turpis. Ut fermentum odio velit, ut
                        sollicitudin
                        sem ullamcorper vitae. Quisque porttitor dolor felis, eu tempus sapien convallis luctus. Nullam
                        interdum faucibus urna, ac bibendum diam rhoncus sed. Maecenas erat tortor, tempor interdum
                        eleifend
                        quis, condimentum ac urna. Nullam placerat eu lectus sit amet dignissim. Phasellus augue lacus,
                        fermentum at mattis ac, eleifend at ipsum.
                    </div>
                </div>
            </Col>
        </Row>
    </div>
}
