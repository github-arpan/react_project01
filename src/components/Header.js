import { LOGO_URL } from "../utils/contants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { GiShoppingCart } from "react-icons/gi";

export const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const { loggedInUser } = useContext(UserContext);
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  return (
    <div className="flex justify-between border-b border-black p-2 ">
      <div className="logo-container">
        <Link to="/">
          <img className="w-20 " src={LOGO_URL} />
        </Link>
      </div>

      <div className=" flex items-center ">
        <ul className=" flex p-2  text-xl  ">
          <li className="border-b border-transparent hover:border-black mr-6 ">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-black mr-6">
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-black mr-6">
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-black mr-6">
            <Link to="/cart">
              <div className="w-8 h-10  relative">
                <GiShoppingCart className="text-3xl " />
                <span className="absolute top-1/3 bg-red-500 text-white text-sm h-5 w-5 rounded-full flex justify-center items-center">
                  {cartItem.length}
                </span>
              </div>
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-black mr-6">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="w-20 bg-green-600 rounded-lg text-white mr-6 "
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="border-b border-transparent hover:border-black mr-6">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};
