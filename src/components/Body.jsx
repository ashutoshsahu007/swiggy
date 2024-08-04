import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
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

  return listOfRestauratn.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-2 p-4">
          <input
            className="border border-solid border-black rounded-lg "
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-300 m-2 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestauratn.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-1 bg-green-300 rounded-lg "
            onClick={() => {
              let filteredRes = listOfRestauratn.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
