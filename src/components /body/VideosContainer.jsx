import React from "react";
import Buttons from "./Buttons";
import Videos from "./Videos";

const VideosContainer = () => {
  return (
    <div className="w-[84%] h-full p-3 overflow-hidden">
      <Buttons />
      <Videos />
    </div>
  );
};

export default VideosContainer;
