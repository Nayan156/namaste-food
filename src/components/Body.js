import RestrauntCard from "./RestaurntCard";
import { restaurentsList } from "../utils/restaurentsList";
import { useState } from "react";

const Body = () => {
    const [restaurants, setRestaurants] =useState(restaurentsList);
    return(
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                setRestaurants(restaurants.filter(res => res.info.avgRating >= 4))
            }}>
                Top Rated Restaurents
            </button>
        </div>
        <div className="res-container">
            {/* <RestrauntCard ResImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" ResName="Meghana Foods"/> */}
            {/* <RestrauntCard resData={resOBJ} /> */}
            {
                restaurants.map((restaurent) => (
                <RestrauntCard key={restaurent?.info?.id} resData={restaurent}/>
                ))
            }
        </div>
    </div>
    )
}

export default Body;