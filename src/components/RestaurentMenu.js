import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

// import { MENU_API_AFTER, MENU_API_BEFORE } from "../utils/constants";
// import { useEffect, useState } from "react"


const RestaurentMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

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

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item)=>{
                    return <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                })}
            </ul>
        </div>
    );
};

export default RestaurentMenu;