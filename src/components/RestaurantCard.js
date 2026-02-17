import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("resData==", resData)
  const {
    cloudinaryImageId,
    name,
    cuisines = [],
    avgRating,
    costForTwo,
    sla,
  } = resData?.info || {};
  const deliveryTime = sla?.deliveryTime;
  // const { deliveryTime } = sla;

  const data = useContext(UserContext)
  const loggedInUser = data.loggedInUser;
  // console.log("data--", loggedInUser)

  return (
    <div data-testid = "resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} min</h4>
      <h4 className="font-bold">{loggedInUser}</h4>
    </div>
  );
};

// Higher order component
// input - RestaurantCard => output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg"> Promoted </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
