import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { SiSwiggy } from "react-icons/si";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  // Subscribing to the store using a selector

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg py-3 px-2 md:px-10 sticky top-0 z-[1000] bg-white">
      <SiSwiggy className="p-2 bg-[#ff5200] rounded-xl text-white text-5xl" />

      <div className="flex items-center text-gray-700">
        <ul className="flex gap-5 font-semibold items-center">
          <li className=" hidden md:flex">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className=" hidden md:flex">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="hidden lg:flex">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="font-bold text-xl ">
            <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
          </li>
          {/* <li className="font-bold text-xl hidden lg:flex">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
