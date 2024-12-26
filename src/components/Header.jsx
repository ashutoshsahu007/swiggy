import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  // Subscribing to the store using a selector

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-yellow-100 shadow-md py-3 px-10">
      <img className="w-20 p-1 rounded-sm" src={LOGO_URL} />
      <div className="flex items-center">
        <ul className="flex gap-5 font-semibold items-center">
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="font-bold text-xl">
            <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="font-bold text-xl">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
