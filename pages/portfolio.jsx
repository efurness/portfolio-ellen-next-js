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
      "Spokes Boulder is a REACT Javascript client-side project using REACT leaflet to indicate bike availability in stations throughtout Boulder and Denver.  The data comes from a Rapid API City Bikes.",
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
  // {
  //   id: 0,
  //   projectName: "ALSN",
  //   url: "https://elmsafeer.co/",
  //   image: "projects/alsn.png",
  //   projectDetail:
  //     "ASLN drives digital transformation with certified document translation services. In an interconnected world where seamless communication is imperative, they are strategically positioned to cater to the needs of businesses, individuals, and organizations.",
  //   technologiesUsed: [
  //     {
  //       tech: "ReactJS",
  //     },
  //     {
  //       tech: ".net",
  //     },
  //     {
  //       tech: "Ant Design",
  //     },
  //     {
  //       tech: "TailwindCSS",
  //     },
  //   ],
  // },
  // {
  //   id: 0,
  //   projectName: "FirmSanad",
  //   url: "https://firmsanad.invogen.co/",
  //   image: "projects/firmsanad.png",
  //   projectDetail:
  //     "Invest in Saudi Arabia, Streamline Your Business Setup Process in Saudi Arabia with FirmSanad Simplify the process of obtaining licenses and starting a business in Saudi Arabia with our streamlined platform.",
  //   technologiesUsed: [
  //     {
  //       tech: "ReactJS",
  //     },
  //     {
  //       tech: ".net",
  //     },
  //     {
  //       tech: "Ant Design",
  //     },
  //     {
  //       tech: "TailwindCSS",
  //     },
  //   ],
  // },
  // {
  //   id: 0,
  //   projectName: "Fateh Al Mustaqbil",
  //   url: "https://fatehtour.com/",
  //   image: "projects/fateh.png",
  //   projectDetail:
  //     "Fateh Al Mustaqbil is a one-of-a-kind travel agency designed to cater to the interests of travelers across the globe, founded in 2023 in Riyadh, Saudi Arabia. Their expertise lies in crafting exceptional journeys tailored to each client's unique requirements, whether it be ticketing, hotel bookings, or visa assistance.",
  //   technologiesUsed: [
  //     {
  //       tech: "ReactJS",
  //     },
  //     {
  //       tech: ".net",
  //     },
  //     {
  //       tech: "Ant Design",
  //     },
  //     {
  //       tech: "TailwindCSS",
  //     },
  //   ],
  // },
  // {
  //   id: 0,
  //   projectName: "Tojjar",
  //   url: "https://tojjar.jmmtest.com/",
  //   image: "projects/tojjar.png",
  //   projectDetail:
  //     "Tojjar is ecommerce website,  where you can open your own store and sell products of different brands!",
  //   technologiesUsed: [
  //     {
  //       tech: "Nextjs with SSR",
  //     },
  //     {
  //       tech: "Laravel",
  //     },
  //     {
  //       tech: "Ant Design",
  //     },
  //     {
  //       tech: "TailwindCSS",
  //     },
  //   ],
  // },
  // {
  //   id: 1,
  //   projectName: "Otawix",
  //   url: "https://b2c.otawix.com/",
  //   image: "projects/otawix.png",
  //   projectDetail:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
  //   technologiesUsed: [
  //     {
  //       tech: "NextJS",
  //     },
  //     {
  //       tech: "NodeJS",
  //     },
  //     {
  //       tech: "MUI",
  //     },
  //     {
  //       tech: "TailwindCSS",
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   projectName: "Spatay",
  //   url: "https://spatay.com/",
  //   image: "projects/spatay.png",
  //   projectDetail:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
  //   technologiesUsed: [
  //     {
  //       tech: "ReactJS",
  //     },
  //     {
  //       tech: "NodeJS",
  //     },
  //     {
  //       tech: "Ant Design",
  //     },
  //     {
  //       tech: "TailwindCSS",
  //     },
  //   ],
  // },
];

const Portfolio = () => {
  return (
    <BannerLayout>
      <div className="mt-10 md:mt-0 text-2xl text-Snow font-semibold text-center font-serif text-center p-4"> Portfolio <span className="text-blue-300 font-bold animate-pulse font-serif ">2024</span></div>

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
