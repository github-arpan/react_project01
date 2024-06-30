import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 m-6">
      <h1 className="font-bold text-2xl ">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-md font-bold"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItem.length === 0 && <h1>Your cart is empty. Please add items</h1>}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};
export default Cart;
