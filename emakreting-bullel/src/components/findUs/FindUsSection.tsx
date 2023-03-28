import SteamLogo from "../../assets/Steam_icon_logo.png"
import EpicLogo from "../../assets/epic-games-2.svg"
import FaceLogo from "../../assets/Facebook_f_logo_(2019).png"
import TwitterLogo from "../../assets/Logo blue.svg"
import InstagramLogo from "../../assets/Instagram_logo_2016.png"
import "./findUsSection.css"

export default function FindUsSection() {


    return <>
        <div style={{marginBottom:"60px",marginTop:"20px"}} className={"reviewHeader"}>
            Find us
            <div style={{marginLeft:20}} className={"reviewHeaderDecoration"}>
                Find us
            </div>
        </div>
        <div className={"findUsSection"} style={{marginBottom:"80px"}}>
            <img className={"logo"} src={SteamLogo}/>
            <img className={"logo"} src={EpicLogo}/>
            <img className={"logo"} src={InstagramLogo}/>
        </div>
        <div className={"findUsSection"}>
            <img className={"logo"} src={FaceLogo}/>
            <img className={"logo"} src={TwitterLogo}/>
        </div>

    </>

}

