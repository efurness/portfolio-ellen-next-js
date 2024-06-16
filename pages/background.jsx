import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";

const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "University of Denver",
        degree: "Certificate: Full-stack Javascript Web Development",
        detail: "HTML/CSS | NODE.js | REACT | Full-Stack Projects",
        year: "2022",
      },
      {
        id: 0,
        title: "University of Denver",
        degree: "M.Sc., Geographic Information Systems, Science",
        detail:
          "Teaching Assistantship | Geographic Research Design | GPS for Resource Mapping | GIS Modeling, Applications | Biogeography ",
        year: "2006",
      },
      {
        id: 1,
        title: "University of Colorado, Boulder",
        degree: "M.Sc., Population Biology/Ecology",
        detail:
          "Teaching Assistantship | Research Psittacine Species | Foraging and Activity of Red-shafted Flickers",
        year: "1995",
      },
      {
        id: 1,
        title: "Colorado College",
        degree: "B.A., Biology",
        detail:
          "Mammology | Field analysis of Geological Structures | Organismal Biology & Ecology",
        year: "1989",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "National Park Service",
        role: "GIS assistant, Frontend Developor, Biological Research",
        url: "https://www.nps.gov/orgs/1971/index.htm",
        desc: "Assisted Webmaster in the design and maintenance of the Air Resources Division using Adobe Dreamweaver/ColdFusion. Created GIS maps, reports and documents. Assisted Chief Biologist in analysis of air pollution in National Parks.",
        year: "2010",
        location: "Lakewood, Denver",
      },
      {
        id: 3,
        title: "Colorado College, Geology",
        role: "Web Builder",
        url: "https://www.coloradocollege.edu/academics/dept/geology/",
        desc: "Developed Geology Departments website including Professors' homepages and Antarctica website ISES using Dreamweaver, CSS and HTML.",
        year: "2003-2009",
        location: "Colorado Springs, Colorado",
      },
      {
        id: 3,
        title: "US Forest Service",
        role: "GIS Specialist",
        url: "https://www.fs.usda.gov/detail/psicc/about-forest/districts/?cid=fsm9_032731",
        desc: "Combined the use of aerial photographs, DOQs, Orthoimagery to interpret major forest types for the Turkey Creek watershed. Use of GIS ArcInfo and ArcEdit Tools. Set up ArcInfo watershed coverages with field verification. Burned Area Emergency Rehabilitation (BAER) projects in watershed assessment of burned areas, aerial reconnaissance, topographic mapping of treatment sites. As a Project Leader and BAER Team Trainee, prepared Final BEAR Reports.",
        year: "2000-2002",
        location: "Pikes Peak National Forest",
      },
    ],
  },
];

function Background(props) {
  const theme = props.theme;
  return (
    <BannerLayout>
      <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10 max-[440px]:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
        <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
          <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
            Education
          </div>
          {background[0]?.eduCards?.map((data, key) => (
            <Edu_Card key={key} data={data} theme={theme} />
          ))}
        </div>
        <div className="order-1 md:order-2">
          <div className="flex flex-col gap-y-4 md:ml-12">
            <div className={`md:pt-0 pt-4 text-xl text-Snow font-semibold`}>
              Experience
            </div>

            {background[1]?.expCards?.map((data, key) => (
              <Exp_Card key={key} data={data} theme={theme} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </BannerLayout>
  );
}

export default Background;
