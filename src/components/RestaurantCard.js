import { CDN_URL } from "../utils/contants";
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData.info;

  return (
    <div className=" m-2 p-2 xl:w-[300px] xl:h-[320px] h-[220px] w-[200px] hover:shadow-2xl shadow-black rounded-xl">
      <div className=" ">
        <img
          className=" xl:h-[220px] h-[120px] w-[100%] object-cover rounded-xl "
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <div className="m p-2  ">
        <div className="flex  justify-between font-medium">
          <h4 className="truncate lg:text-lg text-sm ">{name}</h4>
          <div className="flex items-center">
            <FaStar className="text-green-600" />
            {avgRating}
          </div>
        </div>
        <div className="res-content">
          <div className="flex justify-between">
            <p className="truncate w-[60%] xl:text-lg text-sm ">
              {cuisines.join(", ")}
            </p>
            <p className="font-medium xl:text-lg text-xs ">{sla.slaString} </p>
          </div>
          <p>{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
