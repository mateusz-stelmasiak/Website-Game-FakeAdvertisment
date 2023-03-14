import "./aboutSection.css"
import {Row, Col} from "antd";


export default function AboutSection() {

    return <Row className={"aboutSectionWrapper"}>
        <Col span={8}>
            <div className={"imagePlaceholder"}>

            </div>
        </Col>
        <Col span={16} className={"aboutText"}>
            <div className={"aboutHeader"}>
                About
                <div className={"aboutHeaderDecoration"}>
                    ABOUT
                </div>
            </div>
            <div>
                Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel
                to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel
                to
                gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to gra. Bullel to
                gra. Bullel to gra.
            </div>
        </Col>
    </Row>
}