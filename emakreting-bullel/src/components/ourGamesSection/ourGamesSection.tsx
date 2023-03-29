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
            label: <div style={{fontSize:24,height:"100%",maxWidth:500}}>[2021-12-28] Isaac game clone: <br/>The game is a top-down, dungeon-crawler style shooter with randomly generated levels and enemies. The goal is to reach the final boss and defeat it to win the game.</div>,
            children: <img src={Test}/> ,
        },
        {
            label: <div style={{fontSize:24,height:"100%",maxWidth:500,float:"right"}}>Taiko game clone [2022-04-22] <br/>A rhythm game where players hit taiko drums in time with the music. The game features a range of songs with increasing difficulty levels as the player progresses.</div>,
            children: <img src={Taiko}/> ,
        },
        {
            label: <div style={{fontSize:24,height:"100%"}}>[2022-08-10] Bullel - eternal storm<br/>Fast-paced bullet hell game with intense, challenging gameplay. Players control a ship as they navigate through waves of enemy fire and dodge obstacles. </div>,
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
