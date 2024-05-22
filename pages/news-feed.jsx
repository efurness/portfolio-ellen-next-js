import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import React, { useEffect, useState } from 'react';
import Articles from '../components/Articles';
import axios from 'axios';
function getDate() {
  const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  let d = weekdays[today.getDay()];
  return `${d} ${month}/${date}/${year}`;
}
const NewsFeed = () => {
const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [currentDate, setCurrentDate] = useState(getDate());


    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=P820OA3BVKJ4QezqHU7b85aAQkmjezfc`);
            console.log(res);
            let results = res.data.results
            results.length = 6
            setArticles(results);

            setLoading(false);
        };
        getArticles();

    }, []);
    
  return (
    <BannerLayout>
      
      <div className="mt-10 md:mt-0 text-sm text-Snow font-serif text-right p-2">
      <p>{currentDate}</p>
      
    </div>
      <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold text-center font-serif">
        <div className="p-4">New York Times <span className="text-blue-300 font-bold animate-pulse font-serif">Top Stories</span></div>
        <div className="mt-10 md:mt-0 text-sm text-Snow font-medium font-style: italic text-left font-serif">

        <Articles loading={loading} articles={articles} />
      </div>
      </div>
      <Footer />
    </BannerLayout>
    
  );
};

export default NewsFeed;
