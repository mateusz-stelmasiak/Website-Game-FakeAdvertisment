import "./reviewsSection.css"
import {Col, Row} from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../reviewCard/reviewCard";
import SteamLogo from "../../assets/Steam_icon_logo.png"


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
        <Slider dots={true} infinite={true} speed={500} slidesToShow={4} slidesToScroll={1}>
            <div className={"reviewPlaceholder"}>
                <ReviewCard
                    reviewText={"\" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim nulla leo, in feugiat\n" +
                        "                        felis vehicula\n\""}
                    companyName={"STEAM"} logo={SteamLogo} starCount={4.5}/>

            </div>
            <div className={"reviewPlaceholder"}>
                <h3>2</h3>
            </div>
            <div className={"reviewPlaceholder"}>
                <h3>3</h3>
            </div>
            <div className={"reviewPlaceholder"}>
                <h3>4</h3>
            </div>
            <div className={"reviewPlaceholder"}>
                <h3>5</h3>
            </div>
            <div className={"reviewPlaceholder"}>
                <h3>6</h3>
            </div>
        </Slider>
    </div>
}
