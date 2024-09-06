import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import SiteLogo from "../../public/logo/SiteLogo.png"

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const {userDetails, setUserDetails} = useContext(UserContext)
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="header flex justify-between bg-purple-50 min-w-[1134px]">
            <div className="logo-container">
                <Link to='/'>
                <img className="logo w-36" src = {LOGO_URL} />
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-4 cursor-pointer">
                        Online Status: {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/groceries">Groceries</Link>
                    </li>
                    <li className="px-4 cursor-pointer">
                    <Link to="/cart">Cart[{cartItems.length}]</Link>
                    </li>
                    {userDetails.loggedInUser === "default User"?
                    <li className="px-4 cursor-pointer" onClick={()=>{setUserDetails({ loggedInUser:"Nayan" })}}>Login</li>
                    :<li className="px-4">Hello {userDetails.loggedInUser}</li>}
                </ul>
            </div>
        </div>
    )
}

export default Header;