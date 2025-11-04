import award from "../../../assets/about_me/award.png";

const Awards = () => {
  const awards = [
    {
      img: award,
      time: "2016 - 2021",
      title: "ICT Olympiad Bangladesh Excellence Award",
      description:
        "Recognized for outstanding leadership in promoting ICT education and innovation among Bangladeshi youth through the ICT Olympiad Bangladesh program.",
    },
    {
      img: award,
      time: "2018 - Present",
      title: "Entrepreneur of the Year - Technology Sector",
      description:
        "Awarded for pioneering digital transformation initiatives and establishing successful tech ventures that have impacted the Bangladesh technology landscape.",
    },
    {
      img: award,
      time: "2020 - 2023",
      title: "Cybersecurity Innovation Award",
      description:
        "Honored for developing advanced cybersecurity solutions and promoting digital security awareness across industries in Bangladesh.",
    },
  ];

  return (
    <div className="py-14 w-11/12 lg:w-9/12 mx-auto">
      <h3 className="text-center font-bold text-3xl text-slate-950 mb-4">
        Awards
      </h3>
      <p className="text-center text-slate-950 mb-8">
        Celebrating achievements and recognitions that highlight Shahriar Khan's contributions to technology, entrepreneurship, and education.
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
