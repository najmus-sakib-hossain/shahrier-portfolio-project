import img1 from "../../../assets/about_me/shahriar_khan4.png";
import img2 from "../../../assets/about_me/shahriar_khan3.png";
import img3 from "../../../assets/about_me/shahriar_khan2.png";
import img4 from "../../../assets/about_me/shahriar_khan1.png";
import bgPattern from "../../../assets/about_me/corporate_journey.png";

const Impact = () => {
  const allImpact = [
    "Innovation and Product Development",
    "Research and Development (R&D)",
    "Cybersecurity and Data Protection",
    "Optimization of Processes",
    "Leadership in Digital Transformation",
    "User Experience (UX) Design",
    "Education and Mentorship",
    "Ethical and Social Contributions",
  ];

  return (
    <div
      className="py-10 w-full mx-auto"
      style={{
        backgroundImage: `url(${bgPattern})`,

        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 mb-20">
        <div className="lg:col-span-1">
          <div className="overflow-hidden w-[460px] h-[332px]">
            <img
              src={img1}
              alt=""
              className="transition-transform duration-500 ease-in-out hover:scale-105  w-full h-full object-cover"
            />
          </div>

          <div className="-translate-y-28 transition-transform duration-500 hover:rotate-6 w-[460px] h-[332px]">
            <img
              src={img2}
              alt=""
              className="transition-transform duration-500 hover:scale-110 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col items-center justify-center">
          <h1 className="text-white font-semibold text-4xl lg:text-6xl mb-6">
            Entrepreneur Impact
          </h1>
          <p className="font-light text-gray-300 text-lg text-center">
            Lorem ipsum dolor sit amet consectetur. Placerat suspendisse enim
            quam nibh nulla aenean pellentesque. Ac aliquet sed sit proin ac
            integer massa praesent sit. Eu mauris vitae nec massa quis. Gravida
            tellus pharetra tortor faucibus cras odio non vel.
          </p>
        </div>

        <div className="lg:col-span-1 ml-20">
          <div className="overflow-hidden w-[460px] h-[332px]">
            <img
              src={img3}
              alt=""
              className="transition-transform duration-500 ease-in-out hover:scale-105 w-full h-full object-cover"
            />
          </div>

          <div className="-translate-y-28 transition-transform duration-500 hover:-rotate-6 w-[460px] h-[332px]">
            <img
              src={img4}
              alt=""
              className="transition-transform duration-500 hover:scale-110 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto lg:w-9/12 lg:ml-[20%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-6">
              Technology Impact
            </h1>

            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Viverra interdum at
              elementum adipiscing placerat dignissim sagittis. Morbi donec
              etiam cursus nunc odio non eu eu. Ultricies nulla at neque tortor
              aliquet sit. Sed urna convallis donec nullam tellus posuere amet.
              Nisi ac nunc sit augue massa massa sollicitudin aliquam.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {allImpact.map((impact, index) => (
                <div key={index}>
                  <div className="bg-slate-900 py-8 px-4 rounded-xl">
                    <p className="text-white text-center">{impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
