import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwo}
            </p>
            {categories.map((category, index) => {
                return (
                    <RestaurantCategory
                        data={category?.card?.card}
                        key={category?.card?.card?.title}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() =>
                            setShowIndex((prevIndex) =>
                                prevIndex === index ? null : index
                            )
                        }
                    />
                )
            })}
        </div>
    )
}

export default RestaurantMenu;
