import SteamLogo from "../../assets/Steam_icon_logo.png"
import EpicLogo from "../../assets/epic-games-2.svg"
import FaceLogo from "../../assets/Facebook_f_logo_(2019).png"
import TwitterLogo from "../../assets/Logo blue.svg"
import InstagramLogo from "../../assets/Instagram_logo_2016.png"
import "./findUsSection.css"

export default function FindUsSection() {

    let handleIconClick = (url:string)=>{
        window.location.href = url;
    }

    return <>
        <div style={{marginBottom:"60px",marginTop:"20px"}} className={"reviewHeader"}>
            Find us
            <div style={{marginLeft:20}} className={"reviewHeaderDecoration"}>
                Find us
            </div>
        </div>
        <div className={"findUsSection"} style={{marginBottom:"80px"}}>
            <img onClick={()=>handleIconClick("https://store.steampowered.com/")} className={"logo"} src={SteamLogo}/>
            <img onClick={()=>handleIconClick("https://store.epicgames.com/")} className={"logo"} src={EpicLogo}/>
            <img  onClick={()=>handleIconClick("https://instagram.com/")} className={"logo"} src={InstagramLogo}/>
        </div>
        <div className={"findUsSection"}>
            <img onClick={()=>handleIconClick("https://facebook.com/")} className={"logo"} src={FaceLogo}/>
            <img  onClick={()=>handleIconClick("https://twitter.com/")} className={"logo"} src={TwitterLogo}/>
        </div>

    </>

}

