import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-2  border-x-gray-200 border-b-4 text-left  flex justify-between"
        >
          <div className="w-8/12">
            <div className="py-2">
              <span className="font-semibold text-gray-900">
                {item.card.info.name}
              </span>
              <span className="font-semibold text-gray-900">
                - Rs. {item.card.info.price / 100}
              </span>
            </div>
            <p className="text-sm font-[400]  text-[#676a6d] capitalize">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-4/12 h-fit border-2 border-black relative ">
            <img
              src={CDN_URL + item.card.info.imageId}
              className=" rounded-lg object-cover h-[100px] w-[100px]"
            />
            <button
              className="p-2 absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 rounded-lg bg-green-500 font-[450] text-gray-800"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
