import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const RestarantCategory = ({data, showAccodian ,setShowIndex}) => {
    const [hideAccordian, setHideAccordian] = useState(true);

    useEffect(()=>{
        setHideAccordian(true);
    },[showAccodian])

    const handleAccordian = () => {
        setShowIndex();
        if(showAccodian){
            setHideAccordian(!hideAccordian);
        }
    }
    
    return <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg rounded-md">
        {/* Accordian Header */}
        <div className="flex justify-between hover:cursor-pointer" onClick={handleAccordian}>
            <span className="font-bold text-lg">{data.title} 
                ({data.itemCards.length})
            </span>
            <span>{hideAccordian&&showAccodian?"⬆️":"⬇️"}</span>
        </div>

        {/* Accordian Body */}
        {hideAccordian&&showAccodian?<ItemList  items = {data.itemCards} />:""}

    </div>
}

export default RestarantCategory;