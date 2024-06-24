import { CDN_URL } from "../utils/contants";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Shimmer from "./Shimmer";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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

  console.log(itemCards);
  if (resInfo === null) return <Shimmer />;

  return (
    <div className="mx-[20%] my-2">
      <div className="resMenu">
        <div className="menu-header">
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

        <h2 className="text-3xl my-6">Menu</h2>
        <ul>
          {itemCards?.map((item) => (
            <div key={item.card.info.id} className=" ">
              <div className=" flex justify-between my-2">
                <div className="my-4 max-w-[80%]">
                  <div className="menu-list-price">
                    <div className="font-medium">{item.card.info.name}</div>
                    <div className="flex items-center mb-2">
                      {" "}
                      <MdOutlineCurrencyRupee className="rupee-icon" />
                      {item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100}
                    </div>
                  </div>
                  <div>
                    <p className="  ">{item.card.info.description}</p>
                  </div>
                </div>
                <div className="h-[144px] w-[156px]">
                  <img
                    className="rounded-lg h-[144px] w-[156px]"
                    alt="menu photo"
                    src={CDN_URL + item.card.info.imageId}
                  />
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
