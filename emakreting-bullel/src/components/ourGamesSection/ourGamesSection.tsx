import React, {useEffect, useState} from "react";
import {Radio, Timeline} from 'antd';
import "./ourGameSection.css"
import Test from "../../assets/asdf-removebg-preview.png"
import Taiko from "../../assets/Taiko.png"
import Bullel from "../../assets/bullel-cover.jpg"

export default function OurGameSection() {

    let ourGames = [
        {
            label: <div className={"timelineItem"} style={{height: "100%"}}>Company created [2020-11-18]</div>,
            children: <div style={{height: '150px', width: '10px'}}></div>,
        },
        {
            label: <div className={"timelineItem"} style={{height: "100%", maxWidth: 600}}>[2021-12-28] Isaac game
                clone: <br/>The
                game is a top-down, dungeon-crawler style shooter with randomly generated levels and enemies. The goal
                is to reach the final boss and defeat it to win the game.</div>,
            children: <img className={"timelineImage"} src={Test}/>,
        },
        {
            label: <div className={"timelineItem"} style={{height: "100%", maxWidth: 600, float: "right"}}>Taiko
                Tatsujin
                [2022-04-22] <br/>A rhythm game where players hit taiko drums in time with the music. The game features
                a range of songs with increasing difficulty levels as the player progresses.</div>,
            children: <img className={"timelineImage"} src={Taiko}/>,
        },
        {
            label: <div className={"timelineItem"} style={{height: "100%", maxWidth: 600}}>[2022-08-10] Bullel - eternal
                storm<br/>Fast-paced
                bullet hell game with intense, challenging gameplay. Players control a ship as they navigate through
                waves of enemy fire and dodge obstacles. </div>,
            children: <img className={"timelineImage"} src={Bullel}/>,
        },
        {
            label: "",
            children: <div style={{height: '30px', width: '10px'}}></div>,
        },
    ]

    let ourGamesResponsive = [
        {
            label: <div className={"timelineItem"} style={{height: "100%"}}>[2020-11-18]</div>,
            children: <div className={"timelineItem"}>Company created </div>,
        },
        {
            label: <div className={"timelineItem"} style={{height: "100%", maxWidth: 600}}>Isaac game
                clone [2021-12-28] <br/></div>,
            children: <div className={"timelineItem"}>The
                game is a top-down, dungeon-crawler style shooter with randomly generated levels and enemies. The goal
                is to reach the final boss and defeat it to win the game.</div>,
        },
        {
            label: <div className={"timelineItem"} style={{height: "100%", maxWidth: 600, float: "right"}}>[2022-04-22]
                Taiko
                Tatsujin
            </div>,
            children: <div className={"timelineItem"}>A rhythm game where players hit taiko drums in time with the
                music. The game features
                a range of songs with increasing difficulty levels as the player progresses.</div>,
        },
        {
            label: <div className={"timelineItem"} style={{height: "100%", maxWidth: 600}}>[2022-08-10] Bullel - eternal
                storm</div>,
            children: <div className={"timelineItem"}>Fast-paced
                bullet hell game with intense, challenging gameplay. Players control a ship as they navigate through
                waves of enemy fire and dodge obstacles. </div>,
        },
        {
            label: "",
            children: <div style={{height: '30px', width: '10px'}}></div>,
        },
    ]

    const [windowSize, setWindowSize] = useState<number>(0);

    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const gamesData = windowSize > 600 ? ourGames : ourGamesResponsive;

    return <>
        <div className={"reviewHeader"} style={{marginTop: 100, marginBottom: "60px"}}>
            Our history
            <div className={"reviewHeaderDecoration"}>
                Our history
            </div>
        </div>
        <Timeline
            className={"ourGamesSection"}
            mode={"alternate"}
            items={gamesData}
        />
    </>

}
