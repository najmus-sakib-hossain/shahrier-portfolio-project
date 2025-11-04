import Banner from "../Components/Banner";
import Report from "../Components/Report";
import Awards from "../Components/Awards";
import Story from "../Components/Story";
import Impact from "../Components/Impact";
import Travel from "../Components/Travel";
import Corporate from "../Components/Corporate";
import Associate from "../Components/Associate";
import BannerExp from "../Components/BannerExp";
import Navbar from "@/components/Navbar";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <BannerExp />
      <Report />
      <Awards />
      <Story />
      <Impact />
      <Travel />
      <Corporate />
      <Associate />
    </div>
  );
};

export default Aboutus;
