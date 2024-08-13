import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  console.log(data);

  return (
    <div className="flex justify-between bg-yellow-100 shadow-lg sm:bg-pink-200 lg:bg-green-200">
      <div className="logo-container">
        <img className="w-20 p-1" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
