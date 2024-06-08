import { theme } from "antd";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";

const portfolio = [
  {
    id: 0,
    projectName: "Spokes Boulder",
    url: "https://efurness.github.io/spokes-people/",
    image: "projects/bikePortfolio.png",
    projectDetail:
      "Spokes Boulder is a REACT Javascript client-side project using REACT leaflet to indicate bike availability in stations throughout Boulder and Denver.  The data comes from a Rapid API, City Bikes.",
    technologiesUsed: [
      {
        tech: "React",
      },
      {
        tech: "React Leaflet",
      },
      {
        tech: "City Bikes data",
      },
      {
        tech: "Bulma CSS",
      },
    ],
  },
];

const Portfolio = (props) => {
  const theme = props.theme;

  return (
    <BannerLayout>
      <div className="mt-10 md:mt-0 text-2xl text-Snow font-semibold text-center font-serif text-center p-4">
        {" "}
        Portfolio{" "}
        <span className="text-blue-300 font-bold animate-pulse font-serif ">
          2024
        </span>
      </div>

      <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
        {portfolio.map((data, key) => (
          <PortfolioCard key={key} data={data} theme={theme} />
        ))}
      </div>
      <Footer />
    </BannerLayout>
  );
};

export default Portfolio;
