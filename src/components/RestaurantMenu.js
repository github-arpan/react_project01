import {useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/contants";

const RestaurantMenu = () =>{
    const  [resInfo, setResInfo] = useState()
    
    useEffect(()=>{
         fetchMenu()
    },[]);
    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API_URL);
        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data)
        
    }
    console.log(resInfo.cards[2]?.card?.card?.info.name);
    const {name,cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info
    const {itemCards} = resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards);
  
    return(
        <div>
            <h1>{name} </h1>
            <h3>{avgRating} {costForTwoMessage}</h3>
            <p>{cuisines.join(", ")} </p>

            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=> (
                    <li>{item.card.info.name } {" - Rs "}
                    {item.card.info.price/100 || item.card.info.defaultPrice/100 }
                    </li>

                    ))}
            </ul>
        </div>
    )
}
export default RestaurantMenu;