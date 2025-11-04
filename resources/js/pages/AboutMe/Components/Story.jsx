import img1 from "../../../assets/about_me/bigger_story.png";
import frame from "../../../assets/about_me/frame.svg";
import img2 from "../../../assets/about_me/secret_living.png";
import img3 from "../../../assets/about_me/dedicated.png";
const Story = () => {
  return (
    <div className="py-16 w-11/12 lg:w-9/12 mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-0 py-12">
        <div className="lg:w-1/2">
          <h3 className="text-slate-950 font-semibold text-4xl mb-8">
            The start of a bigger story
          </h3>

          <p className="text-slate-950 mb-8">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <p className="text-slate-950">
            Lorem ipsum dolor sit amet consectetur. Viverra interdum at
            elementum adipiscing placerat dignissim sagittis. Morbi donec etiam
            cursus nunc odio non eu eu. Ultricies nulla at neque tortor aliquet
            sit. Sed urna convallis donec nullam tellus posuere amet. Nisi ac
            nunc sit augue massa massa sollicitudin aliquam.
          </p>
        </div>

        <div className="lg:relative">
          <div className="z-10">
            <img src={img1} alt="" />
          </div>

          <div className="absolute -top-8 -right-8 hidden lg:block">
            <img src={frame} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-0 py-12">
        <div className="relative">
          <div className="z-10">
            <img src={img2} alt="" />
          </div>

          <div className="absolute -top-8 -right-8 hidden lg:block">
            <img src={frame} alt="" />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-slate-950 font-semibold text-4xl mb-8">
            The secret to living is giving
          </h3>

          <p className="text-slate-950 mb-8">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <p className="text-slate-950">
            Lorem ipsum dolor sit amet consectetur. Viverra interdum at
            elementum adipiscing placerat dignissim sagittis. Morbi donec etiam
            cursus nunc odio non eu eu. Ultricies nulla at neque tortor aliquet
            sit. Sed urna convallis donec nullam tellus posuere amet. Nisi ac
            nunc sit augue massa massa sollicitudin aliquam.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-0 py-12">
        <div className="lg:w-1/2">
          <h3 className="text-slate-950 font-semibold text-4xl mb-8">
            A life dedicated to a greater purpose
          </h3>

          <p className="text-slate-950 mb-8">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <p className="text-slate-950">
            Lorem ipsum dolor sit amet consectetur. Viverra interdum at
            elementum adipiscing placerat dignissim sagittis. Morbi donec etiam
            cursus nunc odio non eu eu. Ultricies nulla at neque tortor aliquet
            sit. Sed urna convallis donec nullam tellus posuere amet. Nisi ac
            nunc sit augue massa massa sollicitudin aliquam.
          </p>
        </div>

        <div className="relative">
          <div className="z-10">
            <img src={img3} alt="" />
          </div>

          <div className="absolute -top-8 -right-8 hidden lg:block">
            <img src={frame} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
