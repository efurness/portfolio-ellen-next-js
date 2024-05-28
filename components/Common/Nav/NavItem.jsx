import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavItem = ({ NavIcon, NavText, NavRoute, setIsOpen, theme }) => {
  const textColor = theme === "dark" ? "text-Snow" : "text-blue-600";
  const hoverColor = theme === "dark" ? "hover:bg-gray-700" : "hover:bg-blue-200";

  const router = useRouter();
  const className =
    router.asPath === `${NavRoute}`
      ? "rounded-xl !text-DeepNightBlack bg-green-400 font-bold tracking-widest"
      : "";

  return (
    <Link
      onClick={(e) => setIsOpen(false)}
      href={NavRoute}
      className={`${className} transition flex items-center px-2 ${textColor} ${hoverColor} rounded-xl  py-1.5 font-semibold space-x-4 text-base`}
    >
      {NavIcon}
      <span>{NavText}</span>
    </Link>
  );
};

export default NavItem;
