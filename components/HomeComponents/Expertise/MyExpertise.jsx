import ExpertiseCard from "./ExpertiseCard";

const expertise = [
  {
    id: 1,
    title: "GIS",
    desc: "Proficient in GIS Software: ArcGIS Online, ArcGIS Pro and ArcGIS Extensions: Spatial Analyst, QGIS, GoogleEarth, Leaflet, API for Javascript/Python.  Gaining Geospatial Training in Python for ArcGIS Pro, Building Web and Mobile ArcGIS applications with Javascript. I have been working on Story Maps and Experience Builder through Esri ArcGIS.",
  },

  {
    id: 0,
    title: "Full Stack Web Development",
    desc: "I am a skilled Full-stack Javascript developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients. ",
  },
  {
    id: 2,
    title: "Designing (UI/UX)",
    desc: "I am have a certificate in Web Development and proficient in using design software such as Dreamweaver, PhotoScape X, and Adobe Illustrator. Through participating in freelance work has allowed me to continue to develop my creative skills.",
  },
  {
    id: 3,
    title: "Github/VSCode",
    desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub and VSCode are imperative to my success as a developer.",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    desc: "Open Source is the future. I usually take some time on weekend and contribute towards an opensource project. It gives me opportunity to learn from best developer's practices.",
  },
];

const MyExpertise = (props) => {
  const theme = props.theme;
  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-LightGray">
        My Expertise
      </div>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 ">
        {expertise.map((data, key) => (
          <ExpertiseCard key={key} data={data} theme={theme} />
        ))}
      </div>
    </>
  );
};

export default MyExpertise;
