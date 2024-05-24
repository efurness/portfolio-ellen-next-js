import Intro from "../components/Common/Intro";
import Nav from "../components/Common/Nav/Nav";
import { FaBars, FaMousePointer } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react";
import Switch from "react-switch";

export default function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);
  const theme = props.theme,
    setTheme = props.setTheme;
  const textColor = theme === "dark" ? "text-Snow" : "text-black";
  const textColor2 = theme === "dark" ? "text-Snow" : "text-blue-500"
  const bgColor = theme === "dark" ? "bg-DeepNightBlack" : "bg-sky-50";
  
  return (
    <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none py-1 ${bgColor} S{textColor2}  `}>
      <div className={`theme-switcher ${textColor2} text-sm`}>
        <label style={{ float: "right" }}>
          <Switch
            onChange={() => {
              if (theme === "light" ) {
                setTheme("dark") ;
              } else {
                setTheme("light");
              }
              
            }}
            checked={theme === "light" ? true  : false}
            
            
          />

            {theme === "light" ? ' Light mode'  : ' Dark mode'}
        </label>
      </div>

      <div className="lg:hidden">
        <div
          className={`${bgColor} ${textColor} w-full h-10 flex items-center justify-between px-2 lg:hidden relative`}
        >
          <div
            className="icon flex items-center gap-x-2"
            onClick={(e) => setIntro(!intro)}
          >
            <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
              <SlOptionsVertical />
            </span>
            <div className={`${textColor} absolute -right-1 -bottom-1`}>
              <FaMousePointer />
            </div>
          </div>
          <div
            className="icon flex items-center gap-x-2"
            onClick={(e) => setIsOpen(!isOpen)}
          >
            <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
              {" "}
              <FaBars />
            </span>
          </div>
        </div>
      </div>
      <div className="flex relative h-full justify-between gap-x-3 adjust-height" > 
        {/* left most side */}
        <div
          className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden ${bgColor} ${textColor} shadow-2xl z-50 lg:flex flex-col  lg:relative ${
            intro ? "flex absolute" : "hidden"
          }`}
        >
          <Intro isOpen={intro} setIsOpen={setIntro} theme={theme} />
        </div>
        {/* overlay */}
        {intro && (
          <div
            onClick={(e) => setIntro(false)}
            className="fixed top-0 left-0  w-full h-full  z-40"
          ></div>
        )}

        {/* middle of screen */}
        <div
          className={`w-full h-auto lg:w-9/12 shadow-2xl ${bgColor} ${textColor}  relative overflow-auto overflow-x-hidden no-scrollbar`}
        >
          {props.children}
        </div>

        {/* right sidebar */}
        <div
          className={`hidden lg:block absolute lg:w-20 lg:relative ${bgColor} shadow-2xl rounded-xl overflow-hidden`}
        >
          <div
            onClick={(e) => setIsOpen(!isOpen)}
            className={`${bgColor} text-Green hidden lg:flex items-center h-16 justify-center text-2xl`}
          >
            <span className="icon border-2 border-Green p-2 rounded-xl">
              {" "}
              <FaBars />
            </span>
          </div>
          <span
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 flex items-center justify-center text-center text-xl ${textColor}  font-extrabold tracking-widest`}
          >
            NavBar
          </span>
        </div>
        {<Nav isOpen={isOpen} setIsOpen={setIsOpen} theme={theme} />}
      </div>
    </div>
  );
}
