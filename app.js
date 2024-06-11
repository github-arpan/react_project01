import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { resList } from "./reslist";


const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src="https://png.pngtree.com/png-clipart/20220604/original/pngtree-restaurant-logo-png-image_7932128.png"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>

        </div>
    )
}



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

const Body = () =>{
return (
    <div className="body">
        <div className="search-bar"> 
            <input placeholder="Find What u like"></input>
            <button>Search</button>
        </div>
        <div className="res-container">
           {
            resList.map(Restaurant => <RestaurantCard key={Restaurant.info.id} resData={Restaurant} /> )
           }
           
           
           
        </div>
    </div>
    
)
}




const AppLayout =()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)



 