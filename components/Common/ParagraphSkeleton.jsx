import React from "react";
import CardLayout from "./CardLayout";

const ParagraphSkeleton = ({ className }) => {
  return (
    <CardLayout>
      <div
        role="status"
        className={`${className} max-w-full card_stylings animate-pulse bg-EveningBlack self-center`}
      >
        <div
          key="div_1"
          className="h-2.5 rounded-full bg-Green/20 w-48 mb-4"
        ></div>
        <div
          key="div_2"
          className="h-2 rounded-full bg-Green/20 max-w-[365px] mb-2.5"
        ></div>
        <div key="div_3" className="h-2 rounded-full bg-Green/20 mb-2.5"></div>
        <div
          key="div_4"
          className="h-2 rounded-full bg-Green/20 max-w-[330px] mb-2.5"
        ></div>
        <div
          key="div_5"
          className="h-2 rounded-full bg-Green/20 max-w-[400px] mb-2.5"
        ></div>
        <div
          key="div_6"
          className="h-2 rounded-full bg-Green/20 max-w-[360px]"
        ></div>
        <span className="sr-only">Loading...</span>
      </div>
    </CardLayout>
  );
};

export default ParagraphSkeleton;
