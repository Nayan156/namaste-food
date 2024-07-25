import RestrauntCard from "./RestaurntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [allRestaurents, setAllRestaurents] = useState([]);
    const [restaurants, setRestaurants] =useState([]);
    const [topRatedRestaurents, setTopRatedRestaurants] = useState(true);
    const [searchText, setSearchTech] = useState("");

    useEffect(()=>{
        // console.log("useEffect Called");
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6779892&lng=77.4446786&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        data.json().then((json) => {
        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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

    const loadBerforeFilter = (data) => {
        setRestaurants([]);
        setTimeout(()=>{setRestaurants(data)}, 350)
    }
    // Conditional Rendering
    // if(restaurants.length === 0){
    //     return <Shimmer />
    // }
 
    return  restaurants.length === 0 ? <Shimmer /> :(
    <div className="body">
        <div className="filter">
            <div className="search">
            <input className="search-box" type="text" value={searchText} onChange={(e)=>{setSearchTech(e.target.value)}}/>
            <button className="search-btn" onClick={()=>{
                if(searchText === ""){
                    loadBerforeFilter(allRestaurents);
                }
                else{
                    searchFunction(allRestaurents.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                }
            }}>Search</button>
            </div>
            {topRatedRestaurents?(<button className="filter-btn" onClick={()=>{
                loadBerforeFilter(allRestaurents.filter(res => res.info.avgRating >= 4.5));
                setTopRatedRestaurants(false);
            }}>
                Top Rated Restaurents
            </button>):(<button className="filter-btn" onClick={()=>{
                loadBerforeFilter(allRestaurents);
                setTopRatedRestaurants(true);
            }}> All Restaurent</button>)}
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