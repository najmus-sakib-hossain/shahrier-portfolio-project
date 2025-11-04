import technology from "../../../assets/technology/contribute_field.png";
import frame from "../../../assets/technology/frame.svg";
import docker from "../../../assets/technology/docker_icon.svg";
import kubernets_icon from "../../../assets/technology/kubernets_icon.svg";

const TechnologyField = () => {
  const skills = [
    { img: docker },
    { img: kubernets_icon },
    { img: docker },
    { img: docker },
    { img: docker },
    { img: docker },
    { img: docker },
    { img: docker },
  ];

  return (
    <div className="bg-white py-18">
      <div className="w-11/12 lg:w-9/12 mx-auto text-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
          <div>
            <h1 className="text-5xl font-semibold mb-8">
              Contribution to the field of technology
            </h1>

            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div>
            <div className="relative z-10">
              <img src={technology} alt="" />
              <div className="absolute hidden lg:block -bottom-4 -left-10 -z-10">
                <img src={frame} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto lg:w-9/12 py-18">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <h1 className="text-4xl lg:text-6xl font-semibold text-slate-950 mb-6">
              Tools and software skills
            </h1>

            <p className="text-slate-900">
              Lorem ipsum dolor sit amet consectetur. Viverra interdum at
              elementum adipiscing placerat dignissim sagittis. Morbi donec
              etiam cursus nunc odio non eu eu. Ultricies nulla at neque tortor
              aliquet sit. Sed urna convallis donec nullam tellus posuere amet.
              Nisi ac nunc sit augue massa massa sollicitudin aliquam.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {skills.map((impact, index) => (
                <div key={index}>
                  <div className="bg-slate-200 py-8 px-4 rounded-xl">
                    <div className="flex items-center justify-center">
                      <img src={impact.img} alt="" />
                    </div>
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

export default TechnologyField;
