import Banner from "../Components/Banner";
import AllVideos from "../Components/AllVideos";
import ShortVideos from "../Components/ShortVideos";
import Navbar from "@/components/Navbar";

const Videos = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AllVideos />
      <ShortVideos />
    </div>
  );
};

export default Videos;
