import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { useEffect, useState } from "react";


export const Body = () =>{
    const [listOfRestaurants, setListOfRestaurant] = useState(resList)
    const [searchText, setSearchText] = useState("")

    useEffect(() =>{
        fetchData();
    }, [])

  
    const fetchData = async () => {
        try {
          const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=23.831457&lng=91.2867777");
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const json = await response.json();

          const restaurants = json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants;
          setListOfRestaurant(restaurants);
        } catch (error) {
          console.error("Error fetching data:", error);
          
        }
      };
      
    return (

        <div className="body">
            <div className="search-bar"> 
                <input type="text" placeholder="Find What u like" 
                value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}
                />
                <button onClick={()=>{
                    const filteredRestaurant = listOfRestaurants.filter((res)=>{
                        res.info.name.includes(searchText)
                        
                    })
                    setListOfRestaurant(filteredRestaurant)
                    console.log(searchText);
                }}>Search</button>
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

