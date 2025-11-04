import img1 from "../../../assets/blogs/img1.png";
import img2 from "../../../assets/blogs/img2.png";
import img3 from "../../../assets/blogs/img3.png";
import img4 from "../../../assets/blogs/img4.png";
import img5 from "../../../assets/blogs/img5.png";
import vector_right from "../../../assets/blogs/vector_right.svg";
import vector_left from "../../../assets/blogs/vector_left.svg";

const Banner = () => {
  return (
    <div className="bg-slate-100 pt-48 pb-16 relative">
      <div className="absolute top-0 right-0 hidden lg:block">
        <img src={vector_right} alt="" />
      </div>

      <div className="absolute bottom-0 left-0 hidden lg:block">
        <img src={vector_left} alt="" />
      </div>

      <h1 className="text-slate-950 text-5xl font-semibold text-center mb-8">
        Blogs
      </h1>

      <div className="w-11/12 lg:w-9/12 mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:grid-rows-2">
          <div className="lg:col-span-2 lg:row-span-2">
            <div>
              <div>
                <img className="rounded-t-2xl" src={img1} alt="" />
              </div>

              <div className="p-4 lg:p-8 ">
                <h1 className="text-2xl lg:text-4xl font-semibold text-slate-950 mb-4">
                  Code Warriors Assemble! Bangladesh Prepares for ICT Olympiad
                  Glory.
                </h1>

                <div className="flex items-center gap-8 text-gray-600">
                  <p>20 Aug 2023</p>
                  <p>10 Min Read</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:row-span-1">
            <div>
              <div className="w-full">
                <img className="rounded-t-2xl w-full" src={img2} alt="" />
              </div>

              <div className="p-4">
                <h1 className="text-xl font-semibold text-slate-950 mb-4">
                  Cybersecurity Best Practices for SMEs
                </h1>

                <div className="flex items-center gap-8 text-gray-600">
                  <p>20 Aug 2023</p>
                  <p>10 Min Read</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:row-span-1">
            <div>
              <div className="w-full">
                <img className="rounded-t-2xl w-full" src={img3} alt="" />
              </div>

              <div className="p-4 ">
                <h1 className="text-xl font-semibold text-slate-950 mb-2">
                  Digital Transformation Strategies
                </h1>

                <div className="flex items-center gap-8 text-gray-600">
                  <p>20 Aug 2023</p>
                  <p>10 Min Read</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 lg:row-span-1">
            <div>
              <div className="w-full">
                <img className="rounded-t-2xl w-full" src={img4} alt="" />
              </div>

              <div className="p-4 ">
                <h1 className="text-xl font-semibold text-slate-950 mb-2">
                  Cloud Computing Trends in 2024
                </h1>

                <div className="flex items-center gap-8 text-gray-600">
                  <p>20 Aug 2023</p>
                  <p>10 Min Read</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:row-span-1">
            <div>
              <div className="w-full">
                <img className="rounded-t-2xl w-full" src={img5} alt="" />
              </div>

              <div className="p-4 ">
                <h1 className="text-xl font-semibold text-slate-950 mb-2">
                  Building Scalable Tech Startups
                </h1>

                <div className="flex items-center gap-8 text-gray-600">
                  <p>20 Aug 2023</p>
                  <p>10 Min Read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
