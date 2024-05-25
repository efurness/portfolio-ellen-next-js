import ExpertiseCard from "./ExpertiseCard";

const expertise = [
  {
    id: 0,
    title: "GIS",
    desc: "Proficient in GIS Software: ArcGIS Online, ArcGIS Pro and ArcGIS Desktop: REACT Leaflet, API for Javascript. Story Maps and Experience Builder through Esri ArcGIS.",
  },

  {
    id: 1,
    title: "Full Stack Web Development",
    desc: "I am a skilled in Full-stack Javascript development with experience in building web applications using ExpressJS, ReactJS, NextJS and NodeJS. With my expertise, I can deliver dynamic and efficient web solutions. ",
  },
  {
    id: 2,
    title: "Designing (UI/UX)",
    desc: "I am have a certificate in Web Development and proficient in using design software such as Dreamweaver, PhotoScape X, and Adobe Illustrator. Through participating in freelance work has allowed me to continue to develop my creative skills.",
  },
  {
    id: 3,
    title: "Github/VSCode",
    desc: "Experienced using GitHub for developing REACT and NEXT applications using GitHub actions to publish my sites.  My Full-stack Bootcamp Projects consisted of multiple pull requests to simplify the process of development. Continuous integration ensures up-to-date code. GitHub and VSCode are imperative to my success as a developer.",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    desc: "Open Source is the future. I usually take some time on weekend and contribute towards an opensource project. It gives me opportunity to learn from best developer's practices.",
  },
  {
    id: 4,
    title: "Python for GIS",
    desc: "Geospatial Training in Python for ArcGIS Pro.  Use of Python Window, Notebooks in ArcGIS Pro, Jupyter Notebook, an open-source web application to create documents that contain live Python code and perform analysis and immediately view results in a geographic context",
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
