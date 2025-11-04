import { Tag, Clock, MapPin } from "lucide-react";
import img from "../../../assets/life_events/winning_strategy.png";
import img1 from "../../../assets/life_events/winning_strategy_mini1.png";
import img2 from "../../../assets/life_events/winning_strategy_mini2.png";
import img3 from "../../../assets/life_events/winning_strategy_mini3.png";

const All = () => {
  return (
    <div className="bg-slate-100">
      <div className="w-11/12 lg:w-9/12 mx-auto py-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-10">
          <div>
            <div className="w-full relative">
              <img className="w-full" src={img} alt="" />

              <div className="hidden lg:block">
                <div className="grid grid-cols-3 gap-x-3 absolute bottom-4 px-4">
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-5xl text-slate-900 font-semibold mb-6">
              Winning Strategy with SWOT
            </h3>

            <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 mb-6">
              <div className="bg-[#5C7EFF] px-6 py-2 rounded-lg text-white flex items-center gap-2">
                <p>
                  <Tag />
                </p>
                <p>Category</p>
              </div>

              <div className="bg-[#5C7EFF] px-6 py-2 rounded-lg text-white flex items-center gap-2">
                <p>
                  <Clock />
                </p>
                <p>Time</p>
              </div>

              <div className="bg-[#5C7EFF] px-6 py-2 rounded-lg text-white flex items-center gap-2">
                <p>
                  <MapPin />
                </p>
                <p>Location</p>
              </div>
            </div>

            <p className="text-slate-700">
              The SWOT analysis framework has been instrumental in my strategic planning, helping me identify strengths, weaknesses, opportunities, and threats in various aspects of my life and career. By leveraging this tool, I've developed winning strategies that have led to successful outcomes in entrepreneurship, technology innovation, and personal growth. This approach has enabled me to make informed decisions, mitigate risks, and capitalize on emerging opportunities in the dynamic landscape of business and technology.
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-9/12 mx-auto py-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-10">
          <div>
            <h3 className="text-5xl text-slate-900 font-semibold mb-6">
              Winning Strategy with SWOT
            </h3>

            <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 mb-6">
              <div className="bg-[#5C7EFF] px-6 py-2 rounded-lg text-white flex items-center gap-2">
                <p>
                  <Tag />
                </p>
                <p>Category</p>
              </div>

              <div className="bg-[#5C7EFF] px-6 py-2 rounded-lg text-white flex items-center gap-2">
                <p>
                  <Clock />
                </p>
                <p>Time</p>
              </div>

              <div className="bg-[#5C7EFF] px-6 py-2 rounded-lg text-white flex items-center gap-2">
                <p>
                  <MapPin />
                </p>
                <p>Location</p>
              </div>
            </div>

            <p className="text-slate-700">
              The SWOT analysis framework has been instrumental in my strategic planning, helping me identify strengths, weaknesses, opportunities, and threats in various aspects of my life and career. By leveraging this tool, I've developed winning strategies that have led to successful outcomes in entrepreneurship, technology innovation, and personal growth. This approach has enabled me to make informed decisions, mitigate risks, and capitalize on emerging opportunities in the dynamic landscape of business and technology.
            </p>
          </div>

          <div>
            <div className="w-full relative">
              <img className="w-full" src={img} alt="" />

              <div className="hidden lg:block">
                <div className="grid grid-cols-3 gap-x-3 absolute bottom-4 px-4">
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-9/12 mx-auto py-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-10">
          <div>
            <div className="w-full relative">
              <img className="w-full" src={img} alt="" />

              <div className="hidden lg:block">
                <div className="grid grid-cols-3 gap-x-3 absolute bottom-4 px-4">
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-5xl text-slate-900 font-semibold mb-6">
              Winning Strategy with SWOT
            </h3>

            <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 mb-6">
              <div className="bg-[#5C7EFF] px-6 py-2 rounded-lg text-white flex items-center gap-2">
                <p>
                  <Tag />
                </p>
                <p>Category</p>
              </div>

              <div className="bg-[#5C7EFF] px-6 py-2 rounded-lg text-white flex items-center gap-2">
                <p>
                  <Clock />
                </p>
                <p>Time</p>
              </div>

              <div className="bg-[#5C7EFF] px-6 py-2 rounded-lg text-white flex items-center gap-2">
                <p>
                  <MapPin />
                </p>
                <p>Location</p>
              </div>
            </div>

            <p className="text-slate-700">
              The SWOT analysis framework has been instrumental in my strategic planning, helping me identify strengths, weaknesses, opportunities, and threats in various aspects of my life and career. By leveraging this tool, I've developed winning strategies that have led to successful outcomes in entrepreneurship, technology innovation, and personal growth. This approach has enabled me to make informed decisions, mitigate risks, and capitalize on emerging opportunities in the dynamic landscape of business and technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
