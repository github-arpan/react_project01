import {useState, useEffect } from "react";
import { CDN_URL, MENU_API_URL } from "../utils/contants";
import {Form, useParams} from "react-router-dom"
import { FaStar } from "react-icons/fa";
import Shimmer from "./Shimmer"
import { MdOutlineCurrencyRupee } from "react-icons/md";


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
    const {imageId} = resInfo?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.card?.info  || {}
    
    console.log(itemCards);
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
                             
                            <div className="menu-list-content">
                                <div className="menu-list-price">
                                    <div >{item.card.info.name }</div>
                                    <MdOutlineCurrencyRupee className="rupee-icon"/>
                                    {item.card.info.price/100 || item.card.info.defaultPrice/100 }
                                </div>
                                <div><p className="menu-description">{item.card.info.description}</p></div>
                            </div>
                            <div>
                                    <img  className="menu-list-img" alt="menu photo" src={CDN_URL+item.card.info.imageId} />
                            </div>
                            
                        </div>
                        
                    </div>

 ) )}
            </ul>
            </div>
        </div>
    )
}
export default RestaurantMenu;