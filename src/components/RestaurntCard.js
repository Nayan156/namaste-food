import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    const {resData, resId} = props;
    const {name, cuisines, costForTwo, avgRatingString, cloudinaryImageId} = resData?.info;
    return (
        <div className="res-card">
            <Link to={"/restaurent/"+resId}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h5>{avgRatingString} stars</h5>
            </Link>
        </div>
    )
}

export default RestrauntCard;