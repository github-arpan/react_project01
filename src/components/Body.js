import RestaurantCard from "./RestaurantCard.js";
import { resList } from "./reslist";


export const Body = () =>{
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

