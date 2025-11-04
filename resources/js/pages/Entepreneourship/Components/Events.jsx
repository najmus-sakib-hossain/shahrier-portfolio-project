import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../assets/entepreneourship/slider_1.jpeg";
import img2 from "../../../assets/entepreneourship/slider_2.jpeg";
import img3 from "../../../assets/entepreneourship/slider_3.jpeg";
import img4 from "../../../assets/entepreneourship/slider_4.jpeg";
import img5 from "../../../assets/entepreneourship/slider_5.jpeg";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";

const images = [
  {
    img: img1,
    title: "Tech Innovations Conference 2024",
    date: "June 10, 2024",
    location: "San Francisco, CA",
  },
  {
    img: img2,
    title: "Tech Innovations Conference 2024",
    date: "June 10, 2024",
    location: "San Francisco, CA",
  },
  {
    img: img3,
    title: "Tech Innovations Conference 2024",
    date: "June 10, 2024",
    location: "San Francisco, CA",
  },
  {
    img: img4,
    title: "Tech Innovations Conference 2024",
    date: "June 10, 2024",
    location: "San Francisco, CA",
  },
  {
    img: img5,
    title: "Tech Innovations Conference 2024",
    date: "June 10, 2024",
    location: "San Francisco, CA",
  },
];

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-gray-100 text-slate-950 rounded-full p-3 cursor-pointer shadow-lg z-10"
    onClick={onClick}
  >
    <ChevronRight size={24} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 bg-gray-100 text-slate-950 rounded-full p-3 cursor-pointer shadow-lg z-10"
    onClick={onClick}
  >
    <ChevronLeft size={24} />
  </div>
);

const Events = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-[#2E5AFF] py-18">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl text-white font-semibold">Events</h1>
          <button className="bg-white text-slate-900 font-semibold px-4 py-2 border-none rounded-md transition duration-300 ease-in-out hover:bg-slate-900 hover:text-white active:scale-95 focus:ring-2 focus:ring-slate-500">
            All Events
          </button>
        </div>

        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <div className="w-full h-[500px] relative rounded-2xl overflow-hidden">
                {/* Image */}
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={image.img}
                  alt=""
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-4">
                  <h1 className="text-3xl font-semibold mb-6">{image.title}</h1>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-slate-300">
                      {" "}
                      <Calendar size={24} />
                    </p>
                    <p className="text-slate-300">{image.date}</p>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-slate-300">
                      {" "}
                      <MapPin size={24} />
                    </p>
                    <p className="text-slate-300">{image.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Events;
