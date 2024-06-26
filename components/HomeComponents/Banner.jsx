import Typewriter from "typewriter-effect";
import BannerLayout from "../Common/BannerLayout";
import { Link } from "react-scroll";

const Banner = (props) => {
  const textColor = props.theme === "dark" ? "text-Snow" : "text-Black";
  const bgColor = props.theme === "dark" ? "bg-LightGray/10" : "";
  const gradient = props.theme === "dark" ? "from-MidNightBlack" : "from-Snow/10";
  const textColors = props.theme === "dark" ? "text-Snow" : "text-Snow";

  
  return (
    <BannerLayout>
              <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">
          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              3+
            </span>
            <span className={`text-xs ${textColors}`}>
              REACT Projects
            </span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              2+
            </span>
            <span className={`text-xs ${textColors}`}>Certificates</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              3+
            </span>
            <span className={`text-xs ${textColors}`}>Honors & Awards</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              6+
            </span>
            <span className={`text-xs ${textColors}`}>GIS Projects</span>
          </div>
        </div>

      <div
        className={`absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full `}
      >
        <div
          className={`${bgColor} w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block`}
        >
          <div className="flex items-center md:items-center md:justify-around">
            <div className="">
              <div className="">
                <h1
                  className={`text-3xl sm:text-4xl xl:text-5xl ${textColors} font-bold`}
                >
                  Ellen D Furness
                </h1>
              </div>
              <div className="">
                <div
                  className={`${textColor} py-4 pb-4 text-xs h-20 lg:h-auto`}
                >
                  <span>
                    {"<"}
                    <span className="text-Green sm:text-base xl:text-lg font-bold">
                      div
                    </span>
                    {">"}{" "}
                    <span
                      className={`${textColors} sm:text-xl xl:text-2xl font-bold`}
                    >
                      {" "}
                      I work with{" "}
                      <span className="inline-block">
                        <Typewriter
                          options={{
                            strings: [
                              "ArcGIS Pro",
                              "REACT",
                              "NEXTjs",
                              "REACT Leaflet",
                              "Tailwind"
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                    </span>{" "}
                    {"</"}
                    <span className="text-Green sm:text-base xl:text-lg font-bold">
                      div
                    </span>
                    {">"}{" "}
                  </span>
                </div>
              </div>
              <Link 
                to=""
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className="button bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-purple-500"
              >
                Explore
              </Link>
            </div>
            {/* <div className="w-48 h-52 relative hidden md:block">
                            <img className='absolute top-8 w-full h-full' src="images/emoji.png" alt="emoji" />
                        </div> */}
          </div>
        </div>

        {/* details in row */}
      </div>
    </BannerLayout>
  );
};

export default Banner;
