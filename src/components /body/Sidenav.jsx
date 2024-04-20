import React from "react";
import { RiHome4Fill, RiHome4Line } from "@remixicon/react";
const Sidenav = () => {
  return (
    <div className="w-[16%] h-full flex flex-col p-3 gap-2 overflow-scroll scroll-smooth scroll-py-3">
      <div className="h-12 flex flex-row justify-start items-center gap-6 border-2 p-2 rounded-xl bg-gray-200">
        <RiHome4Fill size={26} />
        <span className="text-g font-[600]">Home</span>
      </div>
      <div className="flex flex-row justify-start items-center gap-6 p-2 rounded-xl">
        <RiHome4Line size={26} />
        <span className="text-g font-[300]">Home</span>
      </div>
    </div>
  );
};

export default Sidenav;
