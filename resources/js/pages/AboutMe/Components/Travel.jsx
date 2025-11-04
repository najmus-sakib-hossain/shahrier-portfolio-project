import worldMap from "../../../assets/about_me/world_map.png";
import turkey from "../../../assets/about_me/turkey.svg";
import canada from "../../../assets/about_me/canada.svg";
import china from "../../../assets/about_me/china.svg";
import usa from "../../../assets/about_me/usa.svg";
const Travel = () => {
  return (
    <div className="pt-16 bg-[#2E5AFF]">
      <h1 className="text-center font-semibold text-4xl lg:text-6xl text-white mb-6">
        Travel countries for business purposes
      </h1>
      <p className="text-gray-300 text-center w-11/12 lg:w-6/12 mx-auto">
        As a global entrepreneur and technology leader, Shahriar Khan has traveled extensively for business purposes, establishing partnerships and exploring opportunities in Turkey, Canada, China, and the United States. These journeys have enriched his perspective and strengthened international collaborations.
      </p>

      <div className="relative">
        <div className="w-full lg:-mt-56">
          <img className="w-full h-full object-cover" src={worldMap} alt="" />
        </div>

        <div className="absolute right-32 bottom-12 hidden lg:block">
          <h1 className="text-xl font-semibold text-white mb-4">
            Country Name
          </h1>
          <div className="flex items-center gap-2 mb-3">
            <div>
              <img src={turkey} alt="" />
            </div>

            <h2 className="text-white font-semibold text-lg">Turkey</h2>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <div>
              <img src={canada} alt="" />
            </div>

            <h2 className="text-white font-semibold text-lg">Canada</h2>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <div>
              <img src={china} alt="" />
            </div>

            <h2 className="text-white font-semibold text-lg">China</h2>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <div>
              <img src={usa} alt="" />
            </div>

            <h2 className="text-white font-semibold text-lg">USA</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
