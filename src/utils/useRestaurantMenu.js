import { useState, useEffect } from "react";
import { MENU_API_AFTER, MENU_API_BEFORE } from "./constants";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await( await fetch(MENU_API_BEFORE+resId+MENU_API_AFTER)).json();
        setResInfo(data.data);
    }

    return (resInfo);
}

export default useRestaurantMenu;