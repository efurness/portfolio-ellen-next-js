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
          <span>2024</span>
        </div>
        <div className="flex items-center">
          Made with ❤️ <span className="font-bold"> &nbsp; Monty-Asp</span>
        </div>

        <a
          href="https://efurness.github.io/ellen-s-react-portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-right">
            <img src="images/react.png" alt="react image" />
          </span>
        </a>
        <a
          href="https://storymaps.arcgis.com/stories/32404e9d37564136bb64c1cfc354d9a2"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-right">
            <img src="images/storymap.png" alt="story map image" />
          </span>
        </a>
        <a href="./Resume2024.pdf" target="_blank" rel="noreferrer">
          <span className="text-right">
            <img src="images/resume.png" alt="resume image" />
          </span>
        </a>
        <a
          href="https://efurness.github.io/Ellen-sProfessionalPortfolio/photo.html"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-right">
            <img src="images/camera.png" alt="camera image" />
          </span>
        </a>
      </div>
      <div className="hidden md:flex items-center">
        <div className="mr-1 text-base">{/* <MdMail /> */}</div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
