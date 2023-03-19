import React from "react";
import heroVideo from "../../assets/pageHeroVideo.mp4"
import ReactPlayer from "react-player";
import "./pageHero.css"

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
            <div className={"overlay"}>
                <div className={"pageHeroHeader"}>
                    <h1>BULLEL</h1>
                    <div className={"pageHeroSubheading"}>eternal storm</div>
                    <button>PLAY NOW</button>
                </div>

            </div>
        </div>
    </div>
}