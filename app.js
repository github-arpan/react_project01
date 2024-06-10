import React from "react";
import ReactDOM from "react-dom/client";


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
const RestaurantCard = () =>{
    return (
        <div className="res-card">
            <img src="https://b.zmtcdn.com/data/pictures/0/19555650/b6718afb1079a1311a161454b97f1fbc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"></img>
            <h3>Meghana Foods </h3>
            <h4>Paneer Kabab, North Indian</h4>
            <h4>4 stars</h4>
            <h4>30 minutes</h4>
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
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/> <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
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



 