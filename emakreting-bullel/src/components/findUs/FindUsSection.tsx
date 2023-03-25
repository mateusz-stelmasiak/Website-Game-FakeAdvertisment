import SteamLogo from "../../assets/Steam_icon_logo.png"
import EpicLogo from "../../assets/epic-games-2.svg"
import "./findUsSection.css"

export default function FindUsSection() {


    return <>
        <div className={"aboutHeader"}>
            Find us
            <div className={"aboutHeaderDecoration"}>
                Find us
            </div>
        </div>
        <div className={"findUsSection"}>
            <img className={"logo"} src={SteamLogo}/>
            <img className={"logo"} src={EpicLogo}/>
            <img className={"logo"} src={SteamLogo}/>
            <img className={"logo"} src={SteamLogo}/>
        </div>

        <div style={{marginTop:100,marginLeft:160}} className={"findUsSection"}>
            <img className={"logo"} src={SteamLogo}/>
            <img className={"logo"} src={SteamLogo}/>
            <img className={"logo"} src={SteamLogo}/>

        </div>
    </>

}

