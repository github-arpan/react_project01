import {useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/contants";
import {useParams} from "react-router-dom"
import { FaStar } from "react-icons/fa";
import Shimmer from "./Shimmer"



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
    
    const {name,cuisines, costForTwoMessage, avgRating, totalRatingsString, areaName, sla} = resInfo?.cards[2]?.card?.card?.info || {}
    const {itemCards} = resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card  || {}
    
    console.log(resInfo);
    if (resInfo === null ) return <Shimmer />;
  
    return (
        <div className="menu-container">
            <div className="resMenu">
                <div className="menu-header">
                    <h1>{name} </h1>
                    <div className="menuHeader-content"> 
                        <h3><FaStar className="star"/>{avgRating} ({totalRatingsString})
                        <span className="cost-span">{costForTwoMessage}</span> </h3>
                        <p>{cuisines?.join(", ")} </p>
                        <div className="menuHeader-address">
                            <p>Outlet : <span>{areaName}</span> </p>
                            <h4>{sla?.slaString?.toLowerCase()}</h4>
                        </div>
                    </div>
                    
                </div>

            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item)=> (
                    
                    <div key={item.card.info.id} className="menuList" >
                        <div className="menu-list-header">
                            {item.card.info.name } {" - Rs "}
                            {item.card.info.price/100 || item.card.info.defaultPrice/100 }
                        </div>
                        <p className="menu-description">{item.card.info.description}</p>
                    </div>

 ) )}
            </ul>
            </div>
        </div>
    )
}
export default RestaurantMenu;