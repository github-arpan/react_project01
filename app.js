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
const Body = () =>{
return (
    <div className="body">
        <div className="search-bar">
            <input placeholder="Find What u like"></input>
            <button>Search</button>
        </div>
        <div className="res-container"></div>
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



 