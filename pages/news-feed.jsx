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
            let results = res.data.results
            results.length = 6
            setArticles(results);

            setLoading(false);
        };
        getArticles();

    }, []);
  return (
    <BannerLayout>
      <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
<br />
        <center>New York Times News Feed</center>
        <br />
        <div className="mt-10 md:mt-0 text-sm text-Snow font-medium font-style: italic">

        <Articles loading={loading} articles={articles} />
      </div>
      </div>
      <Footer />
    </BannerLayout>
    
  );
};

export default NewsFeed;