import {useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/contants";
import {useParams} from "react-router-dom"



const RestaurantMenu = () =>{
    const  [resInfo, setResInfo] = useState()
    
    const {resId} = useParams()
    useEffect(()=>{
         fetchMenu()
    },[]);
    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();

        setResInfo(json.data)
        
    }
    
    const {name,cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info || {}
    const {itemCards} = resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card  || {}
    console.log(itemCards)
   
  
    return(
        <div className="menu-container">
            <div className="resMenu">
            <h1>{name} </h1>
            <h3>{avgRating} {costForTwoMessage}</h3>
            <p>{cuisines?.join(", ")} </p>

            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item)=> (
                    <li key={item.card.info.id}>
                        {item.card.info.name } {" - Rs "}
                    {item.card.info.price/100 || item.card.info.defaultPrice/100 }
                    </li>

                    ))}
            </ul>
            </div>
        </div>
    )
}
export default RestaurantMenu;