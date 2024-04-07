import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";

const NewsFeed = () => {
  return (
    <BannerLayout>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
        News feed goes here
      </div>
      <Footer />
    </BannerLayout>
  );
};

export default NewsFeed;
