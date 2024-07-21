import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.card.info.price / 100, 0);
  };

  const totalPrice = calculateTotalPrice(cartItem);
  // const handleDelete = (items) => {
  //   items.map((item) => dispatch(removeItem(item.card.info.id)));
  // };
  console.log(cartItem);
  return (
    <div className="text-center p-4 m-6 mt-28 min-h-lvh">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItem.length === 0 ? (
          <h1>Your cart is empty. Please add items</h1>
        ) : (
          <>
            <button
              className="p-2 m-2 bg-black text-white rounded-md font-bold"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>

            <ItemList items={cartItem} />
            <div>Total price : {totalPrice}</div>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;
