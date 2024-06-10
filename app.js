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
const RestaurantCard = (props) =>{
    return (
        <div className="res-card">
            <img src={props.foodImg}></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.stars}</h4>
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
            <RestaurantCard resName="Food Park" cuisine="North indian, Bengali" stars="4.1 stars" foodImg="https://b.zmtcdn.com/data/pictures/chains/2/19418342/ea0909f4b70016f3c3b0104dca9300bc_o2_featured_v2.jpg"/>

            <RestaurantCard resName="Dada Boudi Biryani" cuisine="Biryani, Bengali" stars="4.3 stars" foodImg="https://b.zmtcdn.com/data/dish_photos/89d/0c686bb9cbbe609dd5a52b066764189d.jpg?output-format=webp"/>
            <RestaurantCard resName="D Bapi Biryani" cuisine="Biryani, Bengali" stars="4.1 stars" foodImg="https://b.zmtcdn.com/data/dish_photos/89d/0c686bb9cbbe609dd5a52b066764189d.jpg?output-format=webp"/>
           
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



 