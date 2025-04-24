import React from "react";

const Navbar = ({
  searchText,
  setSearchText,
  listOfRestauratn,
  setFilteredRestaurant,
}) => {
  return (
    <div className="filter flex flex-col p-2 md:p-0 items-center md:flex-row">
      <div className="search m-2 p-4 flex items-center flex-col md:flex-row ">
        <input
          className="border text-sm border-solid border-gray-700 rounded-md px-2 py-1 w-[250px]"
          type="text"
          placeholder="Search Your Restaurant Here"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-1 hover:scale-105 transition-all duration-200 text-gray-600 bg-green-300 m-2 font-[500] rounded-lg"
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
          className="px-4 py-1 hover:scale-105 transition-all duration-200 text-gray-600 bg-green-300 font-[500] rounded-lg"
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
  );
};

export default Navbar;
