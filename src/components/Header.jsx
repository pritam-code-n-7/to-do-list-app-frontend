import { FaLayerGroup, FaLightbulb } from "react-icons/fa6";
import { BiSortAlt2 } from "react-icons/bi";

function Header() {
  return (
    <div className="flex items-center justify-between h-14 mb-4 rounded bg-gray-300 dark:bg-gray-800">
      <p className="text-xl ml-4 text-gray-400 dark:text-gray-500">Todo List</p>
      <div className="text-xl flex gap-3 mr-4 text-gray-400 dark:text-gray-500">
        <button className="flex gap-1 items-center">
          <BiSortAlt2 size={22} />
          <span className="hidden lg:block">Sort</span>
        </button>
        <button className="flex gap-1 items-center">
          <FaLayerGroup size={18} />
          <span className="hidden lg:block">Group</span>
        </button>
        <button className="flex gap-1 items-center">
          <FaLightbulb size={18} />
          <span className="hidden lg:block">Suggestions</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
