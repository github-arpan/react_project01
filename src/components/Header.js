import { LOGO_URL } from "../utils/contants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { RiShoppingCart2Fill } from "react-icons/ri";

export const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const { loggedInUser } = useContext(UserContext);
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  return (
    <div className="flex justify-between border-b border-black p-2 ">
      <div className="logo-container">
        <img className="w-20 " src={LOGO_URL} />
      </div>

      <div className=" flex items-center ">
        <ul className=" flex p-2  text-xl  ">
          <li className="border-b border-transparent hover:border-black mx-4 ">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-black mr-4">
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-black mr-4">
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-black mr-4">
            <RiShoppingCart2Fill /> {cartItem.length}
          </li>
          <li className="border-b border-transparent hover:border-black mr-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="w-20 bg-green-600 rounded-lg text-white mr-2 "
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="border-b border-transparent hover:border-black mr-2">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};
