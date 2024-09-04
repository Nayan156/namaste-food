import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    const {resData, resId} = props;
    const {name, cuisines, costForTwo, avgRatingString, cloudinaryImageId} = resData?.info;
    return (
        <div className="res-card group m-4 p-4 w-[250px] rounded bg-[#f0f0f0] hover:bg-gray-300" >
            <Link to={"/restaurent/"+resId}>
            <img className="res-logo rounded" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3 className="font-bold text-lg py-1">{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h5>{avgRatingString} stars</h5>
            <h3 className="text-[#f0f0f0] hover:text-black">Get View</h3>
            </Link>
        </div>
    )
}


// Higher Order Component
// input - Restaurent Card ===>>>> RestaurantCardPromoted

export const withPromoted = (RestrauntCard) =>{
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestrauntCard {...props}/>
            </div>
        )
    }
}

export default RestrauntCard;