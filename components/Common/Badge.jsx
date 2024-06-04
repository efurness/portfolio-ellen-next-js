import React from "react";

const Badge = (props) => {
  const title = props.title;
  const theme = props.theme;
  const textColor = props.theme === "dark" ? "text-Snow" : "text-Fuschia";
  const bgColor = props.theme === "dark" ? "bg-LightGray/10" : "bg-Green";
  const gradient =
    props.theme === "dark" ? "from-MidNightBlack" : "from-Snow/10";

  return (
    <span className={`py-2 px-3 text-xs ${textColor} ${bgColor} rounded-full`}>
      {title}
    </span>
  );
};

export default Badge;
