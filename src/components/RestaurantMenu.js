import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  const { imageId } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="w-2/3 my-10 mx-auto mt-28 ">
      <div className="resMenu">
        <div className="mb-14">
          <h1 className="text-3xl font-medium my-2">{name} </h1>
          <div className="menuHeader-content">
            <h3 className="flex items-center my-2 font-medium">
              <FaStar className="text-green-600" />
              {avgRating} ({totalRatingsString})
              <span className="ml-4">{costForTwoMessage}</span>{" "}
            </h3>
            <p>{cuisines?.join(", ")} </p>
            <div className="menuHeader-address">
              <p>
                Outlet : <span className="font-medium">{areaName}</span>{" "}
              </p>
              <h4 className="font-medium">{sla?.slaString?.toLowerCase()}</h4>
            </div>
          </div>
        </div>
      </div>
      {categories.map((category, index) => (
        <RestaurantCategory
          key="category?.card?.card?.title"
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
