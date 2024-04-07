import Footer from "../components/Footer";
import Banner from "../components/HomeComponents/Banner";
import MyExpertise from "../components/HomeComponents/Expertise/MyExpertise";
import Recommendations from "../components/HomeComponents/Recommendations/Recommendations";
import ClientReviews from "../components/HomeComponents/ClientReviews/ClientReviews";
const home = (props) => {
  return (
    <div className="Home-Page -z-10">
      <Banner theme={props.theme} setTheme={props.setTheme} />
      <MyExpertise theme={props.theme} setTheme={props.setTheme} />
      <Recommendations theme={props.theme} setTheme={props.setTheme} />
      {/* <ClientReviews /> */}
      <Footer theme={props.theme} setTheme={props.setTheme} />
    </div>
  );
};

export default home;
