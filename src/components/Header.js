import { LOGO_URL } from "../utils/contants"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Header = ()=>{
    const [btnName, setBtnName] = useState("login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to ="/" className="link">Home</Link>
                        </li>
                    <li>
                        <Link to="/about" className="link">About Us</Link>
                        </li>
                    <li>
                        <Link to="/contact" className="link">Contact Us</Link>
                    </li>
                    <li>
                    Cart
                        </li>
                    <button className="loginbtn"
                    onClick={() =>{
                        btnName === "login"? setBtnName("logout") :setBtnName("login")
                
                    }}
                    >{btnName}</button>

                </ul>
            </div>

        </div>
    )
}