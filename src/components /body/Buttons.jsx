import React from "react";
const buttonsData = [
  {
    name: "All",
  },
  { name: "Javascript" },
  {
    name: "Music",
  },
  { name: "Data structures and algorithms" },
  {
    name: "ReactJS",
  },
  { name: "Youtube Clone" },
  {
    name: "Tailwind CSS",
  },
  { name: "Movies" },
  {
    name: "ReactJS",
  },
  { name: "Youtube Clone" },
  {
    name: "Tailwind CSS",
  },
  { name: "Movies" },
];
const Buttons = () => {
  return (
    <div className="h-12 w-[100%] flex flex-row justify-start items-center flex-nowrap gap-2 overflow-x-scroll scroll-smooth no-scrollbar">
      {buttonsData.map((btn, index) => {
        return (
          <div
            key={index}
            className="w-auto gap-6 border-2 px-2 py-2 rounded-xl bg-gray-200 shrink-0"
          >
            <span className="font-[300]">{btn.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Buttons;
