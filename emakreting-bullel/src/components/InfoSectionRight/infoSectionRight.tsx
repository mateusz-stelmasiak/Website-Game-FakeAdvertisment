import {Row, Col, Button} from "antd";


export default function InfoSectionRight(props: InfoSectionProps) {

    return <div style={{marginTop: 80}}>
        <Row className={"aboutSectionWrapper"}>
            <Col
                sm={{
                    order: 1,
                    offset: 0,
                    span: 24
                }}
                xl={{
                    order: props.direction === "right" ? 0 : 1,
                    offset: props.direction === "right" ? 1 : 1,
                    span: props.direction === "right" ? 11 : 8
                }}
                xxl={{
                order: props.direction === "right" ? 0 : 1,
                offset: props.direction === "right" ? 2 : 2,
                span: props.direction === "right" ? 8 : 9
            }} className={"aboutColumn"}>
                <div className={"imagePlaceholder"}>
                    <img src={props.imageSrc} className={"imgContainerInfo"}/>
                </div>
            </Col>
            <Col
                sm={{
                    order: 0,
                    offset: 0,
                    span: 24
                }}
                xl={{
                    order: props.direction === "right" ? 1 : 0,
                    offset: props.direction === "right" ? 1 : 1,
                    span: props.direction === "right" ? 11 : 9
                }}
                xxl={{
                order: props.direction === "right" ? 1 : 0,
                offset: props.direction === "right" ? 1 : 2,
                span: props.direction === "right" ? 9 : 8
            }} className={"aboutColumn"}>
                <div className={props.direction === "right" ? "aboutText" : "aboutTextRight"}>
                    <div className={"aboutHeader"}>
                        {props.header}
                        <div className={"aboutHeaderDecoration"}>
                            {props.header}
                        </div>
                    </div>
                    <div className={"aboutDescription"}>
                        {props.text}
                    </div>
                </div>
            </Col>
        </Row>
    </div>
}

interface InfoSectionProps {
    direction: "right" | "left";
    header: string,
    text: string,
    imageSrc: any;
}
