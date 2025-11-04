import Banner from "../Components/Banner";
import Blogs from "../Components/Blogs";
import Certificates from "../Components/Certificates";
import CyberSecurity from "../Components/CyberSecurity";
import TechnologyField from "../Components/TechnologyField";
import Navbar from "@/components/Navbar";

const Technology = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CyberSecurity />
      <TechnologyField />
      <Certificates />
      <Blogs />
    </div>
  );
};

export default Technology;
