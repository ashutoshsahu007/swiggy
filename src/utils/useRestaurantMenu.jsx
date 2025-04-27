import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://cart-karo-backend.vercel.app/menu?restaurantId=${resId}`
    );

    const json = await data.json();
    setRestInfo(json.data);
  };

  return resInfo;
};
export default useRestaurantMenu;
