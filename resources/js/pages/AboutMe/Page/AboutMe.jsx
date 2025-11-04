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

const Aboutus = ({ sections, awards }) => {
  const storySection = sections?.find(s => s.type === 'story');
  const impactSection = sections?.find(s => s.type === 'impact');
  const travelSection = sections?.find(s => s.type === 'travel');

  return (
    <div>
      <Navbar />
      <BannerExp />
      <Report />
      <Awards awards={awards} />
      <Story section={storySection} />
      <Impact section={impactSection} />
      <Travel section={travelSection} />
      <Corporate />
      <Associate />
    </div>
  );
};

export default Aboutus;
