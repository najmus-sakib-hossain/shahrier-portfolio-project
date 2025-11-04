import Activities from "../Components/Activities";
import AllEvents from "../Components/AllEvents";
import Banner from "../Components/Banner";
import Navbar from "@/components/Navbar";

const Events = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Activities />
      <AllEvents />
    </div>
  );
};

export default Events;
