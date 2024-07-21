import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/contants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        console.log(item);
        return (
          <div
            key="item?.card?.info?.id"
            className=" py-2 my-2  border-b border-gray-300 flex justify-between"
          >
            <div className="w-9/12 flex flex-col justify-between ">
              <div className="font-bold">
                <span>{item?.card?.info?.name}</span>
                <span className="block my-1">
                  ₹{" "}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <div>
                <p className="my-4 py-2 mb-6  text-xs ">
                  {item?.card?.info?.description}
                </p>
              </div>
            </div>

            <div className="w-[156px] h-36 p-2 m-2">
              {item?.card?.info?.imageId ? (
                <img
                  alt="No Photo"
                  src={CDN_URL + item?.card?.info?.imageId}
                  className=" rounded-md w-full h-full "
                />
              ) : (
                <div className="h-2/4"></div>
              )}
              <div className="relative bottom-8 left-7 py-2   ">
                <button
                  className="py-2 px-6  text-green-600 border border-gray-300 bg-white shadow-lg font-bold rounded-md hover:bg-gray-200 active:scale-95"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
