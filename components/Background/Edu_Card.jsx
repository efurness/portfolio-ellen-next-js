import React from "react";
import CardLayout from "../Common/CardLayout";

const Edu_Card = (props) => {
  const data = props.data;
  const textColor = props.theme === "dark" ? "text-Snow" : "text-Black";
  const bgColor = props.theme === "dark" ? "bg-DeepNightBlack" : "bg-green-400";

  return (
    <CardLayout className="keepItEmpty">
      <div className={` ${bgColor} card_stylings transition px-8 py-10`}>
        <div className="flex justify-between">
          <div className={`flex-initial text-[17px] ${textColor} font-medium`}>
            {data.title}
          </div>
          <div
            className={`flex justify-items-center justify-center ${textColor} ${bgColor} ml-2 w-32 lg:w-28 h-10 text-xs rounded-full py-3 font-normal text-center`}
          >
            {" "}
            {data.year}{" "}
          </div>
        </div>
        <div className={`text-xs ${textColor} font-normal italic mt-1 `}>
          {data.degree}
        </div>
        <div className={`${textColor} text-sm font-normal mt-4 `}>
          {data.detail}
        </div>
      </div>
    </CardLayout>
  );
};

export default Edu_Card;
