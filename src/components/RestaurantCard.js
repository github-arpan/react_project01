import { CDN_URL } from "../utils/contants";
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData.info;

  return (
    <div className="res-card">
      <div className="res-img">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>

      <div className="res-text">
        <div className="res-title">
          <h4>{name}</h4>
          <div>
            <FaStar className="star" />
            {avgRating}
          </div>
        </div>
        <div className="res-content">
          <div className="content-bottom">
            <p id="cuisines">{cuisines.join(", ")}</p>
            <p id="deliveryTime">{sla.slaString} </p>
          </div>
          <p>{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
