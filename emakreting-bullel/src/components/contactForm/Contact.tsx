import "./Contact.css"
import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import {MessageFilled} from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const sendContactMsgPath = "/PhpScripts/sendContactMsg.php"

function Contact({}) {

    const [feedback, setFeedback] = useState<any>("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    function inputEmail(mail: string) {
        if (mail.length > 256) return;
        setFeedback("");
        setEmail(mail);
    }

    function inputName(name: string) {
        if (name.length > 50) return;
        setFeedback("");
        setName(name);
    }

    function inputMsg(msg: string) {
        if (msg.length > 500) {
            setFeedback("Error: Wiadomość zbyt długa!");
            return;
        }
        setFeedback("");
        setMsg(msg);
    }

    function emptyAllFields() {
        setName("");
        setMsg("");
        setEmail("");
    }

    async function sendMsg(event: any) {
        event.preventDefault();

        //validate email
        if (email !== "" && !email.match(emailRegex)) {
            setFeedback("Error: Niepoprawny adres email!");
            return
        }
        //valide name and surname
        if (name === "") {
            setFeedback("Error: Brak imienia i nazwiska!");
            return
        }
        if (msg === "") {
            setFeedback("Error: Brak treści!");
            return
        }
        //replace all newlines with <br/> to keep format
        let msg_formatted = msg.replace(/(?:\r\n|\r|\n)/g, '<br/>');

        setFeedback(<span>wysłanie wiadomości</span>)
        const response = await fetch(sendContactMsgPath + "?email=" + email + "&name=" + name + "&msg=" + msg_formatted, {
            method: 'get',
            mode: "same-origin",
            credentials: "same-origin",
        });
        const respBody = await response.text();

        let respObj = JSON.parse(respBody);
        //if fails
        if (respObj.success !== "true") {
            setFeedback(respObj.feedback);
            return
        }
        setFeedback(respObj.feedback);
        emptyAllFields();
    }


    return (
        <section className={"contactSectionContainer"} id="contact">


            <div className={"textContainer"}>
                {/*<MessageFilled className={"icon"}/>*/}

                <h2 className={"titleText"}>
                    <div>
                        <div className={"aboutHeader"}>
                            CONTACT
                            <div className={"aboutHeaderDecoration"}>
                                CONTACT
                            </div>
                        </div>
                    </div>
                </h2>

                <div className={"titleBackgroundBlur"}/>
            </div>


            <div className={"contactContainer"}>
                <Form>
                    <Form.Item>
                        <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => inputName(e.target.value)}
                            placeholder="Your name and surname"
                            required
                            className={"form-group"}
                        >
                        </Input>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => inputEmail(e.target.value)}
                            placeholder="Your email address"
                            required>
                        </Input>
                    </Form.Item>
                    <Form.Item>
                        <TextArea
                            rows={4}
                            placeholder="Your message"
                            maxLength={20}
                            id="msg"
                            value={msg}
                            onChange={(e) => inputMsg(e.target.value)}
                            required/>
                    </Form.Item>


                    {feedback !== "" &&
                    <div className="feedback">
                        {feedback}
                    </div>}

                    <button type={"submit"} onClick={sendMsg}>
                        Send
                    </button>

                </Form>
            </div>


        </section>
    );
}

export default Contact;