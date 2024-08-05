import RestrauntCard from "./RestaurntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState({
        allRestaurents: [],
        restaurants: [],
        // topRatedRestaurents: true
    })
    // const [allRestaurents, setAllRestaurents] = useState([]);
    // const [restaurants, setRestaurants] =useState([]);
    const [topRatedRestaurents, setTopRatedRestaurants] = useState(true);
    const [searchText, setSearchTech] = useState("");

    useEffect(()=>{
        // console.log("useEffect Called");
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        data.json().then((json) => {
        // setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setAllRestaurents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantData({
            ...restaurantData,
            allRestaurents: json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
            restaurants: json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        })
    });
    }

    const searchFunction = (data) => {
        if(data.length === 0){
            alert("No Product Available");
        }
        else{
            loadBerforeFilter(data);
        }
    }

    const onlineStatus = useOnlineStatus();
    if(!onlineStatus) return <h1>Looks like you are Offline!!! Please check your internet</h1>

    const loadBerforeFilter = (data) => {
        setRestaurantData({
            ...restaurantData,
            restaurants: [],
        });
        setTimeout(()=>{setRestaurantData({
            ...restaurantData,
            restaurants: data,
        })}, 350)
    }
    // Conditional Rendering
    // if(restaurants.length === 0){
    //     return <Shimmer />
    // }
 
    return  restaurantData.restaurants.length === 0 ? <Shimmer /> :(
    <div className="body">
        <div className="filter">
            <div className="search">
            <input className="search-box" type="text" value={searchText} onChange={(e)=>{setSearchTech(e.target.value)}}/>
            <button className="search-btn" onClick={()=>{
                if(searchText === ""){
                    loadBerforeFilter(restaurantData.allRestaurents);
                    if(!topRatedRestaurents) setTopRatedRestaurants(true);
                }
                else{
                    searchFunction(restaurantData.allRestaurents.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    if(!topRatedRestaurents) setTopRatedRestaurants(true);
                }
            }}>Search</button>
            </div>
            {topRatedRestaurents?(<button className="filter-btn" onClick={()=>{
                loadBerforeFilter(restaurantData.allRestaurents.filter(res => res.info.avgRating >= 4.5));
                setTopRatedRestaurants(false);
            }}>
                Top Rated Restaurents
            </button>):(<button className="filter-btn" onClick={()=>{
                loadBerforeFilter(restaurantData.allRestaurents);
                setTopRatedRestaurants(true);
            }}> All Restaurent</button>)}
        </div>
        <div className="res-container">
            {/* <RestrauntCard ResImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" ResName="Meghana Foods"/> */}
            {/* <RestrauntCard resData={resOBJ} /> */}
            {
                restaurantData.restaurants.map((restaurent) => (
                <RestrauntCard key={restaurent?.info?.id} resId={restaurent?.info?.id} resData={restaurent}/>
                ))

                // restaurants.map((restaurent) => (
                //     <Link key={restaurent.info.id} to={"/restaurent/"+restaurent.info.id} >
                //         <RestrauntCard resData={restaurent}/>
                //     </Link>
                //     ))
            }
        </div>
    </div>
    )
}

export default Body;