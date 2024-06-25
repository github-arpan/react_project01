import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { API_URL } from "../utils/contants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return alert("Connection lost! Please check your network.");

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body lg:mx-36 sm:mx-10 mx-10">
      <div className=" flex justify-center search m-4 p-4">
        <input
          type="text"
          className=" w-80 border-y border-l border-black-50  rounded-l-md py-2 px-3 "
          placeholder="Find What u like"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className=" py-2 px-3  bg-green-400 rounded-r-md"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          <IoSearchOutline className="text-xl" />
        </button>
      </div>

      <div className="m-2">
        <button
          className="border border-solid border-black p-2 ml-14 rounded-md bg-gray-300 "
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="flex flex-wrap justify-center ">
        {filteredRestaurant?.map((Restaurant) => (
          <Link
            key={Restaurant?.info?.id}
            to={"/restaurants/" + Restaurant?.info?.id}
            className="link"
          >
            <RestaurantCard resData={Restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
