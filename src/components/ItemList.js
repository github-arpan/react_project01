import { CDN_URL } from "../utils/contants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key="item?.card?.info?.id"
          className=" py-2 my-2 border-b border-gray-300 flex justify-between"
        >
          <div className="lg:w-9/12 flex flex-col justify-between">
            <div className="font-bold">
              <span>{item?.card?.info?.name}</span>
              <span className="block">
                ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="my-4 py-2  text-xs ">
                {item?.card?.info?.description}
              </p>
            </div>
          </div>

          <div className="w-[156px] h-36  ">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className=" rounded-md w-full h-full "
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
