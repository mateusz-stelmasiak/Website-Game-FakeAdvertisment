import "./reviewsSection.css"
import {Button, Col, Row} from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../reviewCard/reviewCard";
import SteamLogo from "../../assets/Steam_icon_logo.png"
import EpicLogo from "../../assets/epic-games-2.svg"
import TestAvatar from "../../assets/testAvatar.jpg"
import TestAvatar2 from "../../assets/testAvatar2.jpg"
import TestAvatar3 from "../../assets/testAvatar3.png"
import TestAvatar4 from "../../assets/testAvatar4.jpg"

export default function ReviewsSection() {

    let responsiveSettings =[
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }
    ]

    let handleSeeAll = ()=>{
        window.location.href = `https://store.steampowered.com/`
    }
    
    return <div id={"reviews"} className={"reviewsWrapper"}>

        <div className={"reviewHeader"}>
            REVIEWS
            <div className={"reviewHeaderDecoration"}>
                REVIEWS
            </div>
        </div>
        <span>they say we're good...</span>

        <Slider arrows={false} swipe={true} dots={true} infinite={true} speed={500} slidesToShow={3.75}
                responsive={responsiveSettings}
        >
            <div className={"reviewPlaceholder"}>
                <ReviewCard

                    reviewText={"\"This game is insane! Bullel's difficulty level is through the roof, but it's so rewarding when you make progress.\""}
                    companyName={"ProGamerX"} logo={TestAvatar} starCount={5}/>

            </div>
            <div className={"reviewPlaceholder"}>
                <ReviewCard
                    reviewText={"\"Bullel is incredibly challenging! I've been playing for hours and still can't pass the second level.\""}
                    companyName={"MasterBlaster"} logo={TestAvatar2} starCount={4.5}/>

            </div>
            <div className={"reviewPlaceholder"}>
                <ReviewCard
                    reviewText={"\"Bullel is the ultimate bullet hell game! It's not for the faint of heart, but if you're up for the challenge, it's so worth it.\""}
                    companyName={"BulletStormer"} logo={TestAvatar3} starCount={4}/>

            </div>
            <div className={"reviewPlaceholder"}>
                <ReviewCard
                    reviewText={"\"I can't get enough of Bullel! The fast-paced gameplay and intense difficulty make it the perfect game for adrenaline junkies.\""}
                    companyName={"BulletFury"} logo={TestAvatar4} starCount={4.5}/>

            </div>
            <div className={"reviewPlaceholder"}>
                <ReviewCard
                    reviewText={"\"Amazing game, cant stop playing this, fast-paced and for hardcore players only!! And the plot twist omg\""}
                    companyName={"BlackSheep7"} logo={SteamLogo} starCount={4.5}/>

            </div>
            <div className={"reviewPlaceholder"}>
                <ReviewCard
                    reviewText={"\"Super gra, spędziłem w niej 3 godziny a nadal nie moge przejść drugiego poziomu\" - whiteLion11"}
                    companyName={"whiteLion11"} logo={SteamLogo} starCount={4.5}/>

            </div>
        </Slider>
        <Button onClick={handleSeeAll}>SEE ALL</Button>
    </div>
}
