import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, costForTwo } = resData?.info;
  return (
    <div className="m-4 p-4 w-[219px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="res-logo"
        src={CDN_URL + props.resData.info.cloudinaryImageId}
        alt="image not found"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{props.resData.info.sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
