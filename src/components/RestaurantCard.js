const RestaurantCard = (props) =>{
    const{resData} = props;
    const {name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId} = resData?.info
    return (
        <div className="res-card">
            <div className="res-img">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            </div>
            <div className="res-text">
                <div className="res-title">
                    <h4>{name}</h4>
                    <div>
                        <i className="starIcon" class="fa-solid fa-star"></i>
                        {avgRating}
                        </div>
                </div>
                <div className="res-content">
                    
                    <div className="content-bottom">
                        <p id="cuisines">{cuisines.join(", ")}</p>
                        <p id="deliveryTime">{sla.deliveryTime} minutes</p>
                    </div>
                    <p>{costForTwo}</p>
                </div>
               
                
            </div>
            
        </div>
    )
}

export default RestaurantCard;