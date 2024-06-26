import { FaChevronDown } from "react-icons/fa";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-gray-100 shadow-lg p-4 my-4 cursor-pointer">
      <div className="flex justify-between items-center">
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>
          <FaChevronDown />
        </span>
      </div>
      <ItemList items={data.itemCards} />
    </div>
  );
};
export default RestaurantCategory;
