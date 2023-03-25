import "./reviewCard.css"
import {Rate} from "antd";
export default function ReviewCard(props:ReviewCardProps){

    return <div className={"reviewCardWrapper"}>
        <img className={"reviewLogo"} src={props.logo}/>
        <div className={"reviewCompany"}>{props.companyName}</div>
        <div className={"reviewText"}>{props.reviewText}</div>
        <div>{<Rate allowHalf defaultValue={props.starCount} />}</div>
    </div>
}

interface ReviewCardProps{
    logo:any,
    companyName:string,
    reviewText:string,
    starCount:number;
}
