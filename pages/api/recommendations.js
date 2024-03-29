// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Cynthia K. Godoy, NCIDQ_Principal',
    image: "images/cynthia.png",
    designation: 'React JS | NEXT JS | Node | GraphQL',
    view: " I am delighted to wholeheartedly recommend my friend from Web Development bootcamp for her pursuit of a career in GIS.  Her persistance is truly commendable as she consistently strives for excellence in every endeavor. What sets her apart is an unsatiable desire to keep learning, a trait that extends beyond the norm.  Since our school days concluded she digs deeper into the world of programming, devouring at least seven books on the subject.  Her commitment to continuous growth is not just impressive but also inspiring.  I am confident that her passion and dedication will make her an invaluable asset to any GIS team. 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/cynthia-godoy-96951845/"
  },
  {
    id: 1,
    name: 'Patricia F',
    image: "images/pup.png",
    designation: 'Data Scientist | Machine Learning Engineer | Python Developer',
    view: "Knowledgable about your subject, GIS designer will continue to do outstanding map development.",
    linkednURL: ""
  },
  {
    id: 2,
    name: 'Nasir Khan',
    image: "images/nasir.jpg",
    designation: 'MERN | JavaScript | Tailwind | Sass | Bootstrap',
    view: "I wholeheartedly recommend Osama as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Osama's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  },
  {
    id: 3,
    name: 'Muhammad Ullah',
    image: "images/muhammad.jpeg",
    designation: 'MERN Stack Developer at Productbox',
    view: "I highly recommend Osama Javed for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
