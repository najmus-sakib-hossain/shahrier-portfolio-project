import { useState } from "react";
import img1 from "../../../assets/blogs/img6.png";
import img2 from "../../../assets/blogs/img2.png";
import img3 from "../../../assets/blogs/img3.png";
import img4 from "../../../assets/blogs/img4.png";
import img5 from "../../../assets/blogs/img5.png";
import img6 from "../../../assets/blogs/img6.png";
import img7 from "../../../assets/blogs/img7.png";
import img8 from "../../../assets/blogs/img8.png";
import img9 from "../../../assets/blogs/img9.png";
import img10 from "../../../assets/blogs/img10.png";

const Blogs = () => {
  const images = [
    { img: img1, title: "The Future of AI in Bangladeshi Businesses" },
    { img: img2, title: "Cybersecurity Best Practices for SMEs" },
    { img: img3, title: "Digital Transformation Strategies" },
    { img: img4, title: "Cloud Computing Trends in 2024" },
    { img: img5, title: "Building Scalable Tech Startups" },
    { img: img6, title: "The Impact of 5G on Business Innovation" },
    { img: img7, title: "Data Analytics for Competitive Advantage" },
    { img: img8, title: "Sustainable Technology Solutions" },
    { img: img9, title: "Blockchain Applications in Finance" },
    { img: img10, title: "UX Design Principles for Tech Products" },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const isAllVisible = visibleCount === images.length;

  return (
    <div className="bg-white py-18">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl text-slate-900 font-semibold">All Blog</h1>
          <button
            onClick={() => setVisibleCount(isAllVisible ? 4 : images.length)}
            className="bg-[#0035F9] text-white font-semibold px-4 py-2 border-none rounded-md transition duration-300 ease-in-out hover:bg-slate-900 hover:text-white active:scale-95 focus:ring-2 focus:ring-slate-500"
          >
            {isAllVisible ? "Show Less" : "All Blogs"}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {images.slice(0, visibleCount).map((image, index) => (
            <div key={index}>
              <div className="w-full">
                <img className="rounded-t-2xl w-full" src={image.img} alt="" />
              </div>

              <div className="p-4">
                <h1 className="text-xl font-semibold text-slate-950 mb-4">
                  {image.title}
                </h1>

                <div className="flex items-center gap-8 text-gray-600">
                  <p>20 Aug 2023</p>
                  <p>10 Min Read</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
