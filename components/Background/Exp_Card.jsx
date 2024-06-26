import React from "react";
import CardLayout from "../Common/CardLayout";

const Exp_Card = (props) => {
  const data = props.data;
  const textColor = props.theme === "dark" ? "text-Snow" : "text-MidNightBlack";
  const bgColor = props.theme === "dark" ? "bg-DeepNightBlack" : "bg-green-400";

  return (
    <CardLayout>
      <div className={`${bgColor} card_stylings transition px-8 py-10`}>
        <div className={`flex-initial text-[17px] ${textColor} font-medium`}>
          {data.title}
        </div>
        <div className={`text-sm ${textColor} font-normal italic mt-1 `}>
          {data.role}
        </div>
        <div className={`${textColor} text-xs font-normal italic`}>
          <a href={`${data.url}`} target="_blank" rel="noreferrer">
            {data.url}
          </a>
        </div>
        <div className={`${textColor} text-sm font-normal mt-4 text-justify`}>
          {data.desc}
        </div>
        <div
          className={`flex justify-between ${textColor} ${bgColor} w-full h-auto text-xs rounded-full py-3 px-6 mt-4 font-normal`}
        >
          <div>{data.year}</div> <div>{data.location}</div>
        </div>
      </div>
    </CardLayout>
  );
};

export default Exp_Card;
