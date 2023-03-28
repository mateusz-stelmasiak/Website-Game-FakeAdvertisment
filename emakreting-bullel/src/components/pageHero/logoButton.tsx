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

    return <div className={"pageHeroHeader"}>
        <img className={"logoImage"} ref={imageRef} src={logo}/>
        <button className={"logoButton"}>
            PLAY NOW ▷
        </button>
    </div>
}