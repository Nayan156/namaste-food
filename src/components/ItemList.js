import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    // console.log(items);
    return <div>
                {items?.map((item)=>{
                    return <div className="border-b-2 h-48 px-3 flex justify-between" key={item.card.info.id}>
                        <div className={"flex flex-col mr-2 justify-center text-left w-9/12"
                            // + item.card.info.showImage?" w-9/12":" w-10/12"
                            }>
                            <div className="text-lg font-semibold">{item.card.info.name}</div> 
                            <div className="text-sm font-semibold"> Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</div>
                            <div className="text-sm font-light">{item.card.info.description}</div>
                        </div>
                        {item.card.info.showImage?<div className="flex flex-col justify-center w-3/12">
                            <img src={CDN_URL+item.card.info.imageId} alt="Dish Image" 
                            // className="min-w-8 max-w-40 my-4"
                            className="w-full h-[85%] rounded-lg shadow-lg"
                            />
                            <button className="absolute mt-36 ml-[2.5%] px-7 py-2 rounded-lg text-base  border border-gray-300 bg-white text-green-600 hover:bg-gray-400" onClick={() => handleAddItem(item)}>ADD</button>
                        </div>:<button
                            className="  w-24 h-12 mt-16 mr-8 rounded-lg text-base  border border-gray-300 bg-white text-green-600 hover:bg-gray-400" onClick={() => handleAddItem(item)}
                        >ADD</button>}
                    </div>
                })}
    </div>
}

export default ItemList;