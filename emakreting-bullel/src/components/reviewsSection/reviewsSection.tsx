import "./reviewsSection.css"
import {Button, Col, Row} from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../reviewCard/reviewCard";
import SteamLogo from "../../assets/Steam_icon_logo.png"
import EpicLogo from "../../assets/epic-games-2.svg"

export default function ReviewsSection() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return <div className={"reviewsWrapper"}>
        <div className={"reviewHeader"}>
            REVIEWS
            <div className={"reviewHeaderDecoration"}>
                REVIEWS
            </div>
        </div>
        <span>they say we're good...</span>

        <Slider dots={true} infinite={true} speed={500} slidesToShow={4} slidesToScroll={1}>
            <div className={"reviewPlaceholder"}>
                <ReviewCard

                    reviewText={"\"This game is insane! Bullel's difficulty level is through the roof, but it's so rewarding when you make progress.\" - ProGamerX"}
                    companyName={"STEAM"} logo={SteamLogo} starCount={5}/>

            </div>
            <div className={"reviewPlaceholder"}>
                <ReviewCard
                    reviewText={"\"Bullel is incredibly challenging! I've been playing for hours and still can't pass the second level.\" - MasterBlaster"}
                    companyName={"EPIC GAMES"} logo={EpicLogo} starCount={4.5}/>

            </div>
            <div className={"reviewPlaceholder"}>
                <ReviewCard
                    reviewText={"\"Bullel is the ultimate bullet hell game! It's not for the faint of heart, but if you're up for the challenge, it's so worth it.\" - BulletStormer"}
                    companyName={"EPIC GAMES"} logo={EpicLogo} starCount={4}/>

            </div>
            <div className={"reviewPlaceholder"}>
                <ReviewCard
                    reviewText={"\"I can't get enough of Bullel! The fast-paced gameplay and intense difficulty make it the perfect game for adrenaline junkies.\" - BulletFury"}
                    companyName={"STEAM"} logo={SteamLogo} starCount={4.5}/>

            </div>
            <div className={"reviewPlaceholder"}>
                <ReviewCard
                    reviewText={"\"Amazing game, cant stop playing this, fast-paced and for hardcore players only!!\" - BlackSheep7"}
                    companyName={"STEAM"} logo={SteamLogo} starCount={4.5}/>

            </div>
            <div className={"reviewPlaceholder"}>
                <ReviewCard
                    reviewText={"\"Super gra, spędziłem w niej 3 godziny a nadal nie moge przejść drugiego poziomu\" - BlackSheep7"}
                    companyName={"STEAM"} logo={SteamLogo} starCount={4.5}/>

            </div>
        </Slider>
        <Button>SEE ALL</Button>
    </div>
}
