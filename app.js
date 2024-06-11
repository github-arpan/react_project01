import React from "react";
import ReactDOM from "react-dom/client";
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
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = resData?.info
    return (
        <div className="res-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
           
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>delivery in {sla.deliveryTime} minutes</h4>
    
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
            <RestaurantCard resData = {resList[1]}/>
            <RestaurantCard resData = {resList[2]}/>
            <RestaurantCard resData = {resList[3]}/>
            <RestaurantCard resData = {resList[4]}/>
            <RestaurantCard resData = {resList[5]}/>
            <RestaurantCard resData = {resList[6]}/>
            <RestaurantCard resData = {resList[7]}/>
            <RestaurantCard resData = {resList[8]}/>
           
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



 