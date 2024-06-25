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
          <li className="border-b border-transparent hover:border-black">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-black">
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-black">
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-black">
            Cart
          </li>
          <li className="border-b border-transparent hover:border-black">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="w-20 bg-green-600 rounded-lg text-white "
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
