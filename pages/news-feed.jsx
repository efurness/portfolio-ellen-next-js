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
            const res = await axios.get(` https://api.nytimes.com/svc/topstories/v2/home.json?api-key=P820OA3BVKJ4QezqHU7b85aAQkmjezfc`);
            console.log(res);
            setArticles(res.data.results);

            setLoading(false);
        };
        getArticles();

    }, []);
  return (
    <BannerLayout>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
        News feed goes here
        <Articles loading={loading} articles={articles} />
      </div>
      <Footer />
    </BannerLayout>
    
  );
};

export default NewsFeed;
