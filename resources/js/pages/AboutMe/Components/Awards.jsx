import award from "../../../assets/about_me/award.png";

const Awards = () => {
  const awards = [
    {
      img: award,
      time: "Jan, 2016 to Jan, 2021",
      title: "Best National Event Planning Company Award",
      description:
        "Recognized for excellence in delivering top-tier event planning services across the country, setting industry standards in creativity, organization, and client satisfaction.",
    },
    {
      img: award,
      time: "Jan, 2016 to Jan, 2021",
      title: "Best National Event Planning Company Award",
      description:
        "Recognized for excellence in delivering top-tier event planning services across the country, setting industry standards in creativity, organization, and client satisfaction.",
    },
    {
      img: award,
      time: "Jan, 2016 to Jan, 2021",
      title: "Best National Event Planning Company Award",
      description:
        "Recognized for excellence in delivering top-tier event planning services across the country, setting industry standards in creativity, organization, and client satisfaction.",
    },
  ];

  return (
    <div className="py-14 w-11/12 lg:w-9/12 mx-auto">
      <h3 className="text-center font-bold text-3xl text-slate-950 mb-4">
        Awards
      </h3>
      <p className="text-center text-slate-950 mb-8">
        Lorem ipsum dolor sit amet consectetur.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {awards.map((award, index) => (
          <div
            key={index}
            className="group p-6 rounded-lg transition-all duration-300 bg-white hover:bg-slate-900"
          >
            <div className="flex items-center gap-4">
              {/* Image */}
              <div className="h-[200px] w-[200px]">
                <img
                  className="w-full h-full object-cover"
                  src={award.img}
                  alt="Award"
                />
              </div>

              {/* Content */}
              <div className="">
                <p className="text-[#2E5AFF] text-sm mb-2 group-hover:text-[#2E5AFF]">
                  {award.time}
                </p>
                <h3 className="text-lg font-semibold text-slate-950 group-hover:text-white mb-2">
                  {award.title}
                </h3>
                <p className="text-slate-600 group-hover:text-gray-500">
                  {award.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
