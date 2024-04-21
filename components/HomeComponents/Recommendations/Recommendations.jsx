import RecommendationCard from "./RecommendationCard";

const recommendations = [
  {
    id: 0,
    name: "Cynthia K. Godoy, NCIDQ_Principal",
    image: "images/cynthia.png",
    designation: "React JS | NEXT JS | Node | GraphQL",
    view: " I am delighted to wholeheartedly recommend my friend from Web Development bootcamp for her pursuit of a career in GIS.  Her persistance is truly commendable as she consistently strives for excellence in every endeavor. What sets her apart is an unsatiable desire to keep learning, a trait that extends beyond the norm.  Since our school days concluded she digs deeper into the world of programming, devouring at least seven books on the subject.  Her commitment to continuous growth is not just impressive but also inspiring.  I am confident that her passion and dedication will make her an invaluable asset to any GIS team. 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/cynthia-godoy-96951845/",
  },
  {
    id: 1,
    name: "Patricia F",
    image: "images/pup.png",
    designation: "Design",
    view: "Ellen is quite knowledgable about GIS and Web Development having created many apps using React Leaflet, REACT, NEXTjs, and MapView.  A common thread is her outstanding map development as seen in GIS StoryMap and Experience Builder.  To combine GIS, Biology, and Web makes her very appealing candidate for an organization 🌟",
    linkednURL: "",
  },
  {
    id: 2,
    name: "Mrs. Shelley Levine",
    image: "images/romeo.jpg",
    designation:
      "Cranial Sacral Therapist | Trauma Recovery Specialist | Life Coach",
    view: "As a close friend and professional confidant, I have experienced Ellen as a very bright, productive ambitious person, who diligently works always up to a new challenge. Ellen not only learns new technologies in depth with great speed, she also raises the bar as her standards are high and never cease to reflect her superlative talent! My field as a Holistic practitioner, I meet a wide variety of people. Ellen is most impressive and would undoubtedly be a great asset for the fortunate company that hires Ellen.🌟",
  },
];

const Recommendations = (props) => {
  const theme = props.theme;
  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-LightGray">
        Recommendations
      </div>
      <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
        {recommendations.map((data, key) => (
          <RecommendationCard key={key} data={data} theme={theme} />
        ))}
      </div>
    </>
  );
};

export default Recommendations;
