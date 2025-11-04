import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import certificate_1 from "../../../assets/technology/certificate_1.png";
import certificate_2 from "../../../assets/technology/certificate_2.png";
import certificate_3 from "../../../assets/technology/certificate_3.png";
const Certificates = () => {
  const images = [
    { img: certificate_1 },
    { img: certificate_2 },
    { img: certificate_3 },
    { img: certificate_1 },
  ];

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-indigo-300 text-white rounded-full p-3 cursor-pointer shadow-lg z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowRight size={24} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 bg-indigo-300 text-white rounded-full p-3 cursor-pointer shadow-lg z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft size={24} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto py-18">
      <h1 className="text-5xl text-slate-900 font-semibold mb-4 text-center">
        Certificates
      </h1>
      <p className="text-slate-600 text-center mb-12">
        Lorem ipsum dolor sit amet consectetur. Malesuada orci molestie blandit
        quam risus. Et aliquam sed diam dui sem morbi ornare etiam.
      </p>

      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <div className="w-full h-[400px] relative rounded-2xl overflow-hidden">
              {/* Image */}
              <img
                className="w-full h-full object-contain rounded-2xl"
                src={image.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Certificates;
