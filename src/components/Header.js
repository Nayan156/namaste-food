import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import SiteLogo from "../../public/logo/SiteLogo.png"

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <Link to='/'>
                <img className="logo" src = {LOGO_URL} />
                </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/groceries">Groceries</Link>
                    </li>
                    <li>Cart</li>
                    <li className="login-btn" onClick={()=>{btnName === "Login"? setBtnName("Logout"): setBtnName("Login")}}>{btnName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;