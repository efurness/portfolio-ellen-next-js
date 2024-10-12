import Footer from "../components/Footer";
import Banner from "../components/HomeComponents/Banner";
import MyExpertise from "../components/HomeComponents/Expertise/MyExpertise";
import Recommendations from "../components/HomeComponents/Recommendations/Recommendations";
import Weather from "../components/Weather";

const home = (props) => {
  return (
    <div className="Home-Page -z-10">
      <Banner theme={props.theme} setTheme={props.setTheme} />
      <MyExpertise theme={props.theme} setTheme={props.setTheme} />
      <Recommendations theme={props.theme} setTheme={props.setTheme} />
      <Footer theme={props.theme} setTheme={props.setTheme} />
    </div>
  );
};

export default home;
