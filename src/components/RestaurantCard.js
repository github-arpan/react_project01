import { CDN_URL } from "../utils/contants";
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData.info;

  return (
    <div className=" m-2 p-2 w-[300px]">
      <div className=" ">
        <img
          className=" h-[220px] w-[300px] object-cover rounded-xl "
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <div className="m p-2">
        <div className="flex  justify-between font-medium">
          <h4 className="truncate text-lg ">{name}</h4>
          <div className="flex items-center">
            <FaStar className="text-green-600" />
            {avgRating}
          </div>
        </div>
        <div className="res-content">
          <div className="flex justify-between">
            <p className="truncate w-[60%]">{cuisines.join(", ")}</p>
            <p className="font-medium">{sla.slaString} </p>
          </div>
          <p>{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
