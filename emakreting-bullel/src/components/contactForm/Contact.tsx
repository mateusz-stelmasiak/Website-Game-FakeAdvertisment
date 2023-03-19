import "./Contact.css"
import React, {useState} from "react";
import {Button, Form, Input} from "antd";

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const sendContactMsgPath = "/PhpScripts/sendContactMsg.php"

function Contact({}) {
    const [feedback, setFeedback] = useState<any>("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    function inputEmail(mail:string) {
        if (mail.length > 256) return;
        setFeedback("");
        setEmail(mail);
    }

    function inputName(name:string) {
        if (name.length > 50) return;
        setFeedback("");
        setName(name);
    }

    function inputMsg(msg:string) {
        if (msg.length > 500) {
            setFeedback("Wiadomość zbyt długa!");
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

    async function sendMsg(event:any) {
        event.preventDefault();

        //validate email
        if (email !== "" && !email.match(emailRegex)) {
            setFeedback("Niepoprawny adres email!");
            return
        }
        //valide name and surname
        if (name === "") {
            setFeedback("Brak imienia i nazwiska!");
            return
        }
        if (msg === "") {
            setFeedback("Brak treści!");
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
        <div className="InfoPage Contact">
            <div className={"aboutHeader"}>
                CONTACT
                <div className={"aboutHeaderDecoration"}>
                    CONTACT
                </div>
            </div>
            <p>
                Contact us by phone or email by filling out the form below.
                <br/><br/>Tel. <a href="tel:+48888888888">+48 512 556 512</a>
            </p>


            <Form>
                <Form.Item>
                    <Input
                        id="name"
                        value={name}
                        onChange={(e) => inputName(e.target.value)}
                        placeholder="Twoje imię i nazwisko"
                        required>
                    </Input>
                </Form.Item>
                <Form.Item>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => inputEmail(e.target.value)}
                        placeholder="Twój adres email"
                        required>
                    </Input>
                </Form.Item>
                <Form.Item>
                    <Input
                        type="textarea"
                        id="msg"
                        value={msg}
                        onChange={(e) => inputMsg(e.target.value)}
                        placeholder="Twoja wiadomość"
                        required>
                    </Input>
                </Form.Item>



                {feedback !== "" &&
                <div className="feedback">
                    {feedback}
                </div>}

                <Button type='primary' onSubmit={sendMsg}>
                    Wyślij
                </Button>

            </Form>


        </div>
    );
}

export default Contact;