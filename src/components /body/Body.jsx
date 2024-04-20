import React from "react";
import Sidenav from "./Sidenav";
import VideosContainer from "./VideosContainer";

const Body = () => {
  return (
    <div className=" w-full h-[calc(100%-3.5rem)] flex flex-row justify-start items-start gap-6 overflow-hidden">
      <Sidenav />
      <VideosContainer />
    </div>
  );
};

export default Body;
