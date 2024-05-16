import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import React, { useEffect, useState } from 'react';
import Articles from '../components/Articles';
import axios from 'axios';

const NewsFeed = () => {
const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

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
      <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold text-center font-serif">
        <div className="p-4">New York Times <span className="text-blue-300 font-bold animate-pulse font-serif">Top Stories</span></div>
        <div className="mt-10 md:mt-0 text-sm text-Snow font-medium font-style: italic text-left">

        <Articles loading={loading} articles={articles} />
      </div>
      </div>
      <Footer />
    </BannerLayout>
    
  );
};

export default NewsFeed;
