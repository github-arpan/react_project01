import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { useState } from "react";


export const Body = () =>{
    const [listOfRestaurants, setListOfRestaurant] = useState(resList)
    return (

        <div className="body">
            <div className="search-bar"> 
                <input placeholder="Find What u like"></input>
                <button>Search</button>
            </div>
            
            <div className="filter">
                <button className="filterBtn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res)=> res.info.avgRating > 4
                    );
                    setListOfRestaurant(filteredList)
                }}>Top Rated</button>
            </div>
            <div className="res-container">
               {
                listOfRestaurants.map(Restaurant => <RestaurantCard key={Restaurant.info.id} resData={Restaurant} /> )
               }          
            </div>
        </div>
        
    )
    }

