import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestarantCategory from "./RestaurantCategory";
import { useState } from "react";

// import { MENU_API_AFTER, MENU_API_BEFORE } from "../utils/constants";
// import { useEffect, useState } from "react"


const RestaurentMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    // const [resInfo, setResInfo] = useState(null);
    // useEffect(()=>{
    //     fetchMenu();
    // },[])

    // const fetchMenu = async () => {
    //     const data = await (await fetch(MENU_API_BEFORE+resId+MENU_API_AFTER)).json()
    //     setResInfo(data.data)
    // }

    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="menu text-center min-w-[1134px]">
            <h1 className="my-6 text-2xl font-semibold">{name}</h1>
            <p className="text-lg font-bold mt-2">
                {cuisines.join(",")} - {costForTwoMessage}
            </p>

            {categories.map((category, index) => 
            <RestarantCategory 
            key={category?.card?.card.title} 
            data={category?.card?.card}
            showAccodian={ index === showIndex }
            setShowIndex={() => setShowIndex(index)}
            />)}

            {/* <h2 className="text-lg font-semibold mt-2">Menu</h2>
            */}
        </div>
    );
};

export default RestaurentMenu;