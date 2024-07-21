import { LOGO_URL } from "../utils/contants";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserProvider from "../utils/UserContext";
import { useSelector } from "react-redux";
import { GiShoppingCart } from "react-icons/gi";
import { FaCircle } from "react-icons/fa";

export const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserProvider);
  const cartItem = useSelector((store) => store.cart.items);

  const handleLogout = () => {
    setLoggedInUser(false);
  };
  const handleClick = () => {
    if (loggedInUser) {
      handleLogout();
    }
  };
  return (
    <div className="flex justify-between items-center border-b border-gray-200 p-2 fixed w-full top-0 z-10 bg-white shadow-md ">
      <div className="logo-container">
        <Link to="/">
          <img className="lg:w-20 w-10 " src={LOGO_URL} />
        </Link>
      </div>

      <div className=" flex items-center ">
        <ul className=" flex items-center space-x-4 w-full p-2  text-sm lg:text-xl  ">
          <li className="border-b border-transparent hover:border-gray-400  mr-2 ">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-gray-400   mr-2 ">
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-gray-400  mr-2 ">
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-gray-400   mr-2 ">
            <Link to="/cart">
              <div className="w-8 h-10  relative">
                <GiShoppingCart className="lg:text-3xl text-xl absolute top-2" />
                <span className="absolute top-2/4 bg-red-500 text-white text-sm lg:h-5 h-3 lg:w-5 w-3 rounded-full flex justify-center items-center">
                  {cartItem.length}
                </span>
              </div>
            </Link>
          </li>
          <Link to="/login">
            <button
              className="lg:w-20 w-14 bg-green-600 rounded-lg text-white text-sm  py-1 active:scale-95"
              // value={btnName}
              data-testid="loginbtn"
              onClick={handleClick}
            >
              {loggedInUser ? "logout" : "login"}
            </button>
          </Link>

          {loggedInUser ? (
            <li className="min-w-12 ">
              <span className="flex items-center">
                <FaCircle className="text-[8px] text-green-600 mr-1" />
                {loggedInUser.username}
              </span>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};
