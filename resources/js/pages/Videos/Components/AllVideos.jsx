import { useState } from "react";
import thumbline from "../../../assets/videos/video_thumbline.png";
import playFill from "../../../assets/videos/play-fill.svg";

const AllVideos = () => {
  const mockData = [
    {
      id: 1,
      title: "Transplant gives patient a second chance",
      image: thumbline,
    },
    { id: 2, title: "A new hope for patients in need", image: thumbline },
    { id: 3, title: "The future of medical innovations", image: thumbline },
    {
      id: 4,
      title: "Transplant gives patient a second chance",
      image: thumbline,
    },
    { id: 5, title: "A new hope for patients in need", image: thumbline },
    { id: 6, title: "The future of medical innovations", image: thumbline },
  ];

  const [visibleVideos, setVisibleVideos] = useState(3);

  return (
    <div className="py-18 bg-slate-100">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-2xl lg:text-5xl text-slate-900 font-semibold">
            All Videos
          </h1>
          <input
            type="text"
            placeholder="Search For Blogs"
            className="rounded-lg text-slate-600 p-4 shadow-lg bg-white"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {mockData.slice(0, visibleVideos).map((item) => (
            <div key={item.id}>
              <div className="w-full h-full relative">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={item.image}
                  alt="Thumbnail"
                />
                <div className="flex items-center gap-2 absolute bottom-10 left-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <img src={playFill} alt="Play" className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white hidden lg:block">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {visibleVideos < mockData.length ? (
            <button
              onClick={() => setVisibleVideos(mockData.length)}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              Load More
            </button>
          ) : (
            <button
              onClick={() => setVisibleVideos(3)}
              className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllVideos;
