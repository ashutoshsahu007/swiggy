import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClicked = () => {
    setShowIndex();
  };
  return (
    <>
      <div>
        <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
          <div
            className="flex justify-between cursor-pointer"
            onClick={handleClicked}
          >
            <span className="font-bold text-lg">
              {data.title}({data.itemCards.length})
            </span>
            <span>▼</span>
          </div>

          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </>
  );
};
export default RestaurantCategory;
