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

      <div className="flex items-center   ">
        <ul className="flex justify-evenly w-[500px]  p-2 text-xl ">
          <li className="">
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
