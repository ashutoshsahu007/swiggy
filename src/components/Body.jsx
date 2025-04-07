import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Footer from "./Footer";
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
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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
      <h1>
        Looks like you're offline !! Please Check Your Internet Connection
      </h1>
    );
  }

  return listOfRestauratn.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body border-2">
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        listOfRestauratn={listOfRestauratn}
        setListOfRestaurant={setListOfRestaurant}
        setFilteredRestaurant={setFilteredRestaurant}
      />
      <div className="flex flex-wrap border-2 border-red-600">
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
      <Footer />
    </div>
  );
};
export default Body;
