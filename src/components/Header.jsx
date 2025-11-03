import { DiApple } from "react-icons/di";
import { MdOutlineSearch } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";

const searchIconSize = 35;
const headerLinkStyling = "text-lg px-10 py-1 rounded-full font-medium";
const headerLinkActive = " bg-white text-[#B6CCDA]";

const HeaderComponent = () => {
  return (
    <header>
      <div className="flex flex-row justify-between items-center my-10">
        <DiApple color="white" size={80} className="cursor-pointer"></DiApple>
        <ul className="flex flex-row h-full gap-8">
          <a href="#" className={headerLinkStyling}>
            Home
          </a>
          <a href="#" className={headerLinkStyling}>
            iPhone
          </a>
          <a href="#" className={headerLinkStyling}>
            iPad
          </a>
          <a href="#" className={headerLinkStyling + headerLinkActive}>
            iWatch
          </a>
          <a href="#" className={headerLinkStyling}>
            Support
          </a>
        </ul>
        <div className="flex flex-row h-full">
          <MdOutlineSearch
            color="white"
            className="cursor-pointer"
            size={searchIconSize}
          ></MdOutlineSearch>
          <div className="self-stretch w-0.5 bg-white mx-3"></div>
          <MdOutlineShoppingBag
            color="white"
            className="cursor-pointer"
            size={searchIconSize}
          ></MdOutlineShoppingBag>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
