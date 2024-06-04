import React from "react";
import { CONTACTS } from "../../../constants/constants";
import Link from "next/link";

const Contact = (props) => {
  const textColor = props.theme === "dark" ? "text-Snow" : "text-Black";
  const bgColor = props.theme === "dark" ? "bg-DeepNightBlack" : "bg-Green";

  return (
    <div className="flex flex-col space-y-2 pt-6">
      <div className="flex flex-col">
        <span className={`${textColor} text-xs font-bold`}>Email Address</span>

        <span className={`text-xs ${textColor}`}>
          <Link href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</Link>
        </span>
      </div>
      <div className="flex flex-col">
        <span className={`${textColor} text-xs font-bold`}>Phone</span>
        <span className={`text-xs text-gray-600`}>{CONTACTS.PHONE}</span>
      </div>
    </div>
  );
};

export default Contact;
