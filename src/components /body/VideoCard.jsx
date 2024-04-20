import React from "react";
import { calculateDateTime, calculateViews } from "../../utilities/functions";

const VideoCard = ({ details }) => {
  return (
    <div
      key={details.id}
      className="h-[22rem] w-[23rem] overflow-hidden flex flex-col justify-start items-start"
    >
      <img
        className="h-48 w-full bg-blue-100 rounded-lg"
        src={details.snippet.thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="h-36 w-full pt-4 flex flex-row gap-4 pl-1 justify-start items-start">
        <img className="w-12 h-12 bg-red-200 rounded-full" />
        <div className="w-[calc(100%-3.5rem)] h-full">
          <h1 className="text-xl leading-tight tracking-tight h-12 overflow-hidden">
            {details?.snippet?.title}
          </h1>
          <h3 className="text-sm text-gray-500 font-[600] pt-3">
            {details?.snippet.channelTitle}
          </h3>
          <h6 className="text-sm text-gray-500 font-[600]">
            {calculateViews(details?.statistics.viewCount)} •{" "}
            {calculateDateTime(details?.snippet.publishedAt)}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
