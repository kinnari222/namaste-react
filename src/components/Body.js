import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      RESTAURANT_LIST_API
    );
    const json = await data.json();

    //get all the cards
    const restaurants = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []

    //Set state
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>You are Offline, Please check your Internet Connection</h1>
    )

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} onChange={(event) => { setSearchText(event.target.value) }} />
          <button className="px-4 py-2 bg bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}>
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName</label>
          <input className="border border-black p-2" value={loggedInUser} onChange={(event) => setUserName(event.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant, index) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {/* If the restaurant is promoted then add a promoted label */}
            {restaurant.info.veg ? (
              <RestaurantCardPromoted resData={restaurant} /> 
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
