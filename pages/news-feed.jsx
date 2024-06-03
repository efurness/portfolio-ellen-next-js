import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import Articles from "../components/Articles";
import axios from "axios";
function getDate() {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  let d = weekdays[today.getDay()];
  return `${d} ${month}/${date}/${year}`;
}
const NewsFeed = (props) => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [currentDate, setCurrentDate] = useState(getDate());

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=P820OA3BVKJ4QezqHU7b85aAQkmjezfc`
      );
      console.log(res);
      let results = res.data.results;
      results.length = 6;
      setArticles(results);

      setLoading(false);
    };
    getArticles();
  }, []);

  return (
    <BannerLayout>
      <div className="mt-10 md:mt-0 text-sm text-Snow font-serif text-right p-1">
        <p>{currentDate}</p>
      </div>
      <div className="mt-10 md:mt-0 text-2xl text-Snow  text-center">
        <div className="p-4 font-serif font-semibold">
          New York Times{" "}
          <span className="text-blue-300 font-bold animate-pulse font-serif">
            Top Stories
          </span>
        </div>
        <div className="mt-10 md:mt-0 text-sm text-Snow font-style: italic text-left">
          <Articles loading={loading} articles={articles} theme={props.theme} />
        </div>
      </div>
      <Footer />
    </BannerLayout>
  );
};

export default NewsFeed;
