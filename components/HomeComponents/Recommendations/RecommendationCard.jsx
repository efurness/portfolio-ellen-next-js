import React from "react";
import CardLayout from "../../Common/CardLayout";

const RecommendationCard = (props) => {
  const data = props.data;
  const textColor = props.theme === "dark" ? "text-Snow" : "text-Black";
  const bgColor = props.theme === "dark" ? "bg-LightGray/10" : "bg-Green";
  return (
    <CardLayout>
      <div
        className={`${bgColor} p-8 h-full relative card_stylings transition opacity-75`}
      >
        <img
          src={data?.image}
          className="absolute z-10 right-10 -top-5 border-Green w-16 h-16  border-[3px] rounded-full m-0"
        />
        <div className={` ${textColor} underline italic`}>
          <a href={data?.linkednURL} target="_blank" rel="noreferrer">
            {data?.name}
          </a>
        </div>
        <div className={`text-xs ${textColor} italic mt-1`}>
          {data?.designation}
        </div>
        <div className={`text-sm mt-2 ${textColor} font-normal`}>
          {data?.view}
        </div>
      </div>
    </CardLayout>
  );
};

export default RecommendationCard;
