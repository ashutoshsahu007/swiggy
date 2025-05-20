import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Navbar from "./Navbar";

const Body = () => {
  const RestaurantCardPromoted = withPromotedLabel();
  const [listOfRestauratn, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://cart-karo-backend.vercel.app/api/swiggy");

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1 className="text-2xl font-bold p-5">
        Looks like you're offline !! Please Check Your Internet Connection
      </h1>
    );
  }

  return listOfRestauratn.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="text-[#02060cbf]">
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        listOfRestauratn={listOfRestauratn}
        setListOfRestaurant={setListOfRestaurant}
        setFilteredRestaurant={setFilteredRestaurant}
      />
      <div className="flex flex-wrap justify-center p-1">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/city/bangalore/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
