import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a selector

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-yellow-100 shadow-md py-3 px-2 md:px-10">
      <img className="w-20 p-1 rounded-sm" src={LOGO_URL} />
      <div className="flex items-center">
        <ul className="flex gap-5 font-semibold items-center">
          <li className=" hidden md:flex">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className=" hidden md:flex">
            <Link to="/">Home</Link>
          </li>
          <li className=" hidden lg:flex">
            <Link to="/about">About us</Link>
          </li>
          <li className="font-bold text-xl ">
            <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
          </li>
          <li className="font-bold text-xl hidden lg:flex">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
