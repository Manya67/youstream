import React from "react";
import {
  RiMenuLine,
  RiVideoAddLine,
  RiNotification3Line,
} from "@remixicon/react";
import youStreamLogo from "../../images/youstreamLogo.png";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="w-full h-14 flex flex-row justify-between items-center px-6 py-1 ">
      <div className="h-full flex flex-row items-center justify-center gap-4">
        <div className="">
          <RiMenuLine />
        </div>
        <div className="h-full flex flex-row items-center justify-center">
          <img
            src={youStreamLogo}
            alt="YouStream logo"
            className="h-8 w-8 object-cover"
          />
          <span className="text-bold text-center tracking-tighter font-semibold text-xl">
            YouStream
          </span>
        </div>
      </div>
      <SearchBar />
      <div className="flex flex-row justify-center items-center gap-8 w-[10%]">
        <RiVideoAddLine />
        <RiNotification3Line />
        <span className="bg-red-900 rounded-full h-8 w-8"></span>
      </div>
    </div>
  );
};

export default Header;
