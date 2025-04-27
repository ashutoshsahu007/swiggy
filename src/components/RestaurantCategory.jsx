import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setOpenIndex }) => {
  const handleClicked = () => {
    setOpenIndex();
  };

  return (
    <div className="w-[90%] md:min-w-[700px] md:w-[50%] mx-auto my-6 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClicked}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl">▼</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
