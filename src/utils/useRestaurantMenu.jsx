import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(MENU_API + resId);

    // const data = await fetch(
    //   `http://localhost:3001/menu?restaurantId=${resId}`
    // );
    const data = await fetch(
      `https://cart-karo-backend.vercel.app/menu?restaurantId=${resId}`
    );

    // const data = await fetch(
    //   "https://cart-karo-backend.vercel.app/menu?restaurantId=12345"
    // );
    const json = await data.json();
    setRestInfo(json.data);
  };

  return resInfo;
};
export default useRestaurantMenu;
