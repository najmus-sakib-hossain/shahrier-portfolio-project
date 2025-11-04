import Banner from "../Components/Banner";
import Highlights from "../Components/Highlights";
import Summary from "../Components/Summary";
import Review from "../Components/Review";
import RecommendedBooks from "../Components/RecommendedBooks";
import Navbar from "@/components/Navbar";

const Books = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Highlights />
      <Summary />
      <Review />
      <RecommendedBooks />s
    </div>
  );
};

export default Books;
