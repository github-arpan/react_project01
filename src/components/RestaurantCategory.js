import { FaChevronDown } from "react-icons/fa";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItems);
  };
  console.log(data);
  return (
    <div className="bg-gray-100 shadow-lg p-4 my-4 ">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>
          <FaChevronDown />
        </span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
