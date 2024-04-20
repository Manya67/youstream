import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../../utilities/utilities";
import VideoCard from "./VideoCard";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="w-full h-[calc(100%-3rem)] mt-2 pt-3 overflow-scroll grid grid-cols-auto-fill-320 gap-y-8">
      {videos &&
        videos.map((video, index) => {
          return <VideoCard details={video} key={index} />;
        })}
    </div>
  );
};

export default Videos;
