import { SlCalender } from "react-icons/sl";
import pattern from "../../../assets/events/banner_vector.png";
import pattern_bottom from "../../../assets/events/bottom_vector.png";
import { CiLocationOn } from "react-icons/ci";
import img1 from "../../../assets/entepreneourship/slider_1.jpeg";
import img2 from "../../../assets/entepreneourship/slider_2.jpeg";
import img3 from "../../../assets/entepreneourship/slider_3.jpeg";
import img4 from "../../../assets/entepreneourship/slider_4.jpeg";
import { Link } from "react-router-dom";

const Banner = () => {
  const images = [img1, img3, img4, img2];
  return (
    <div className="bg-slate-50 relative min-h-screen">
      {/* Background Patterns */}
      <div className="absolute right-0 p-1 hidden lg:block">
        <img src={pattern} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="absolute left-0 bottom-0 hidden lg:block">
        <img src={pattern_bottom} alt="" />
      </div>

      <div className="pt-24">
        <h1 className="text-slate-950 text-5xl text-center font-semibold mb-16">
          Active Events
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          {[
            {
              lgRotate: "lg:rotate-2",
              lgTranslateX: "lg:translate-x-0",
              lgTranslateY: "lg:translate-y-10",
            },
            {
              lgRotate: "lg:-rotate-4",
              lgTranslateX: "lg:-translate-x-10",
              lgTranslateY: "lg:translate-y-0",
            },
            {
              lgRotate: "lg:-rotate-6",
              lgTranslateX: "lg:-translate-x-16",
              lgTranslateY: "lg:translate-y-4",
            },
            {
              lgRotate: "lg:rotate-3",
              lgTranslateX: "lg:-translate-x-32",
              lgTranslateY: "lg:translate-y-12",
            },
          ].map((style, index) => (
            <div
              key={index}
              className={`group w-88 h-[500px] relative rounded-2xl overflow-hidden transition-all duration-500 ease-in-out 
              ${style.lgRotate} ${style.lgTranslateX} ${style.lgTranslateY}
              lg:hover:rotate-0 lg:hover:translate-x-0 lg:hover:translate-y-0 lg:hover:scale-105 lg:group-hover:z-10`}
            >
              {/* Image */}{" "}
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={images[index]}
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-4">
                <Link to="/ai-summit">
                  {" "}
                  <h1 className="text-3xl font-semibold mb-6">
                    Tech Innovations Conference 2024
                  </h1>
                </Link>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-slate-300">
                    <SlCalender size={24} />
                  </p>
                  <p className="text-slate-300">June 10, 2024</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-slate-300">
                    <CiLocationOn size={24} />
                  </p>
                  <p className="text-slate-300">San Francisco, CA</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
