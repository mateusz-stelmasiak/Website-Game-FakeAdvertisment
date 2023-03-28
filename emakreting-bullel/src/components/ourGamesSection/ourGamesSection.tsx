import React from "react";
import {Radio, Timeline} from 'antd';
import "./ourGameSection.css"
import Test from "../../assets/asdf-removebg-preview.png"
import Taiko from "../../assets/Taiko.png"
import Bullel from "../../assets/bullel-cover.jpg"
export default function OurGameSection() {

    let ourGames = [
        {
            label: <div style={{fontSize:24,height:"100%"}}>Company created [2020-11-18]</div>,
            children: <div style={{height:'150px',width:'10px'}}></div> ,
        },
        {
            label: <div style={{fontSize:24,height:"100%"}}>[2021-12-28] Isaac game clone</div>,
            children: <img src={Test}/> ,
        },
        {
            label: <div style={{fontSize:24,height:"100%"}}>Taiko game clone [2022-04-22]</div>,
            children: <img src={Taiko}/> ,
        },
        {
            label: <div style={{fontSize:24,height:"100%"}}>[2022-08-10] Bullel - eternal storm</div>,
            children: <img src={Bullel}/> ,
        },
        {
            label: "",
            children: <div style={{height:'30px',width:'10px'}}></div>  ,
        },
    ]

    return <Timeline
        className={"ourGamesSection"}
        mode={"alternate"}
        items={ourGames}
    />

}
