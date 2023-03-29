import logo from "../../assets/logo.png";
import React, {useEffect, useRef, useState} from "react";

export default function LogoButton() {
    const [sticky, setSticky] = useState(false);

    const imageRef = useRef<any>(null);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            console.log(imageRef.current.offsetTop);
            if (window.scrollY > imageRef.current.offsetTop) {
                setSticky(true);
                console.log("A")
            } else {
                setSticky(false);
                console.log("B")
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let handlePlayNow = ()=>{
        window.location.href = `https://store.steampowered.com/`
    }

    return <div className={"pageHeroHeader"}>
        <div className={"buttonContainer"}>
            <img className={"logoImage"} ref={imageRef} src={logo}/>
            <button onClick={handlePlayNow} className={"logoButton"}>
                PLAY NOW ▷
            </button>
        </div>
    </div>
}