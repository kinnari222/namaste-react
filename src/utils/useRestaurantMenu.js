import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resId]);

       const fetchData = async () => {
        const data = await fetch(RESTAURANT_MENU_API + resId);
        // console.log("resData--", data);

        const json = await data.json();
        // console.log("json===--", json)
        setResInfo(json.data);
    };
    // console.log("resInfo===", resInfo);
    return resInfo;
};

export default useRestaurantMenu;