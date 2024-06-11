import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { resList } from "./components/reslist";
import RestaurantCard from "./components/RestaurantCard.js";


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



 