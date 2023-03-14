import "./aboutSection.css"
import {Row, Col} from "antd";


export default function AboutSection() {

    return <Row className={"aboutSectionWrapper"}>
        <Col span={8} className={"aboutColumn"}>
            <div className={"imagePlaceholder"}>

            </div>
        </Col>
        <Col span={11} className={"aboutColumn"}>
            <div className={"aboutText"}>
                <div className={"aboutHeader"}>
                    About
                    <div className={"aboutHeaderDecoration"}>
                        ABOUT
                    </div>
                </div>
                <div className={"aboutDescription"}>
                    Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel
                    to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra.
                    Bullel
                    to
                    gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra.
                    Bullel to
                    gra. Bullel to gra.
                </div>
            </div>
        </Col>
    </Row>
}