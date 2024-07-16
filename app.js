import React from "react";
import ReactDOM from "react-dom/client";
import { restaurentsList } from "./restaurents";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestrauntCard = (props) => {
    const {resData} = props;
    const {name, cuisines, costForTwo, avgRatingString} = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`} />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h5>{avgRatingString} stars</h5>
        </div>
    )
}

const Body = () => {
    return(
    <div className="body">
        <div className="search">
            Search
        </div>
        <div className="res-container">
            {/* <RestrauntCard ResImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" ResName="Meghana Foods"/> */}
            {/* <RestrauntCard resData={resOBJ} /> */}
            {
                restaurentsList.map((restaurent) => (
                <RestrauntCard key={restaurent?.info?.id} resData={restaurent}/>
                ))
            }
        </div>
    </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 