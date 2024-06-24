import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnName, setBtnName] = useState("login");
  return (
    <div className="flex justify-between border-b border-black p-2 ">
      <div className="logo-container">
        <img className="w-20 " src={LOGO_URL} />
      </div>

      <div className="flex items-center w-96 ">
        <ul className="flex justify-evenly w-96 p-2 ">
          <li className="mr-2">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className=""
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
