import { AiFillCopyrightCircle } from "react-icons/ai";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div id="intro" className="mt-4 mb-10 lg:mb-0">
      <div className="flex h-10 items-center justify-between text-xs font-normal  ${textColor} py-4 px-2 md:px-4 w-full ${bgColor}">
        <div className="flex items-center">
          <div className="mr-1 text-base">
            <AiFillCopyrightCircle />
          </div>
          <span>2024 All Rights Reserved.</span>
        </div>
        <div className="flex items-center">
          <a
            href="https://www.fiverr.com/codeworthy"
            target="_blank"
            rel="noreferrer"
          >
            Made with ❤️ by <span className="font-bold">Monty-Asp</span>
          </a>
        </div>
        <div className="hidden md:flex items-center">
          <div className="mr-1 text-base">
            <MdMail />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
