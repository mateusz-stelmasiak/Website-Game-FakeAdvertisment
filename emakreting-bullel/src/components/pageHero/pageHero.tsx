import React, {useEffect, useRef, useState} from "react";
import heroVideo from "../../assets/pageHeroVideo.mp4"
import ReactPlayer from "react-player";
import "./pageHero.css"
import overlayImage from "../../assets/shadow.png"
import left from "../../assets/left.png"
import right from "../../assets/right.png"
import logo from "../../assets/logo.png"
import LogoButton from "./logoButton";
export default function PageHero() {



    return <div className={"pageHeroWrapper"}>

        <div className={"pageHeroVideo"}>
            <ReactPlayer
                className={"react-player"}
                url={heroVideo}
                playing
                loop
                muted
                width="100%"
                height="100%"
            />
            <div className={"overlay"}
                 style={{backgroundImage: `url(${overlayImage})`, backgroundRepeat: 'no-repeat', objectFit: 'cover'}}>
            <div className={"overlay"}
                 style={{backgroundImage: `url(${left})`, backgroundRepeat: 'no-repeat', objectFit: 'cover'}}/>

                <div className={"overlay"}
                     style={{backgroundImage: `url(${right})`, backgroundRepeat: 'no-repeat', objectFit: 'cover'}} id={"right-overlay"}/>

            </div>
        </div>
    </div>
}