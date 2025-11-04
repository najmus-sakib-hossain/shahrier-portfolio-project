import nexKraft from "../../../assets/entepreneourship/nexkraft.png";
import mechani from "../../../assets/entepreneourship/mechani.png";
import huistle from "../../../assets/entepreneourship/huistle.png";
import mindshaper from "../../../assets/entepreneourship/mindshaper.png";
import { useState } from "react";

import { X } from "lucide-react";
const Innovation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white w-11/12 lg:w-9/12 mx-auto py-18">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl lg:text-5xl font-semibold text-slate-900 lg:w-3/4 mb-6">
            Igniting Innovation: A Startup Journey
          </h1>
          <p className="text-slate-900">
            Embarking on a journey of innovation, I've founded and nurtured several startups that push the boundaries of technology and creativity. From NexKraft's focus on next-generation technological advancements to Mechani's engineering solutions, Huistle's innovative platforms, and Mindshaper's transformative ideas, each venture represents a step towards transforming bold concepts into impactful realities. This entrepreneurial path has been about more than just building companies—it's about fostering a culture of innovation that drives progress and creates lasting value in the digital world.
          </p>
        </div>

        <div
          className="w-full cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img className="w-full object-cover" src={nexKraft} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-24">
        <div className="w-full h-96">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={mechani}
            alt=""
          />
        </div>
        <div className="w-full h-96">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={huistle}
            alt=""
          />
        </div>
        <div className="w-full h-96">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={mindshaper}
            alt=""
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#2E5AFF] p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 relative">
            <button
              className="absolute top-3 right-3 text-xl text-gray-700 hover:text-red-500"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="w-11/12 lg:w-9/12 mx-auto py-16">
              <h1 className="text-white mb-10">
                <span className="text-5xl font-semibold"> "Nexkraft"</span> –{" "}
                <span className="text-3xl font-medium">
                  Spotlighting the next generation of technological
                  advancements.
                </span>
              </h1>
              <img
                className="w-full rounded-lg"
                src={nexKraft}
                alt="NexKraft"
              />
              <p className="mt-4 text-gray-700">
                NexKraft is an innovative startup focused on transforming the
                digital world through cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Innovation;
