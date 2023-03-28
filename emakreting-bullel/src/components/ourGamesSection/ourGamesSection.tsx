import React from "react";
import {Radio, Timeline} from 'antd';
import "./ourGameSection.css"
import Test from "../../assets/asdf-removebg-preview.png"


export default function OurGameSection() {

    let ourGames = [
        {
            label: <div style={{fontSize:24,height:"100%"}}>Isaac game clone - 2021-12-28</div>,
            children: <img src={Test}/> ,
        },
        {
            label: <div style={{fontSize:24,height:"100%"}}>Isaac game clone - 2021-12-28</div>,
            children: <img src={Test}/> ,
        },
        {
            label: <div style={{fontSize:24,height:"100%"}}>Isaac game clone - 2021-12-28</div>,
            children: <img src={Test}/> ,
        },
        {
            label: <div style={{fontSize:24,height:"100%"}}>Isaac game clone - 2021-12-28</div>,
            children: <img src={Test}/> ,
        },
    ]

    return <Timeline
        className={"ourGamesSection"}
        mode={"alternate"}
        items={ourGames}
    />

}
