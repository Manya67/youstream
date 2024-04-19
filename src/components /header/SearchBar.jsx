import React, { useState } from "react";
import { RiSearchLine, RiMicFill } from "@remixicon/react";
const SearchBar = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  return (
    <div className="h-[85%] w-[50%] flex flex-row justify-center items-center gap-3">
      <div className="w-[90%] flex flex-row h-full items-center">
        <div
          className={`flex justify-center items-center h-full rounded-l-full text-center border-[1px] border-r-0 px-4 py-1 ${
            searchClicked ? "border-blue-700" : "hidden"
          }`}
        >
          <RiSearchLine size={18} />
        </div>
        <input
          type="text"
          className={`h-full border-[1px]  w-full px-4 py-1 outline-none ${
            searchClicked
              ? "border-blue-700 border-l-0"
              : "border-l-[1px] rounded-l-full"
          }`}
          placeholder="Search"
          onFocus={() => {
            setSearchClicked(true);
          }}
          onBlur={() => {
            setSearchClicked(false);
          }}
        />
        <div className="bg-gray-100 flex justify-center items-center h-full rounded-r-full text-center border-[1px] px-4 py-1">
          <RiSearchLine size={22} />
        </div>
      </div>
      <div className="bg-gray-100 p-2 w-10 h-10 rounded-full text-center">
        <RiMicFill />
      </div>
    </div>
  );
};

export default SearchBar;
