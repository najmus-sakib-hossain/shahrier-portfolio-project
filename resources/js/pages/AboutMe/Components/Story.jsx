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
            Shahriar Khan's journey began with a passion for technology and business. Graduating from East West University with a Master of Business Administration in Banking, Corporate, Finance, and Securities Law, he embarked on a path that would lead him to become a prominent figure in the tech industry.
          </p>

          <p className="text-slate-950">
            His early experiences shaped his vision for innovative solutions that bridge technology with real-world business challenges. Through perseverance and strategic thinking, Shahriar transformed ideas into successful ventures, establishing himself as a leader in digital transformation.
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
            Shahriar believes that true success comes from giving back to the community. Through his entrepreneurial ventures and philanthropic efforts, he has supported numerous initiatives in education, technology, and social development.
          </p>

          <p className="text-slate-950">
            His commitment to mentorship and knowledge sharing has helped countless young professionals enter the tech industry. By founding Nexkraft LTD in 2011, Shahriar has created opportunities for innovation and growth, proving that business success and social responsibility can go hand in hand.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-0 py-12">
        <div className="lg:w-1/2">
          <h3 className="text-slate-950 font-semibold text-4xl mb-8">
            A life dedicated to a greater purpose
          </h3>

          <p className="text-slate-950 mb-8">
            Shahriar Khan's life is driven by a greater purpose: to harness technology for positive change. As CEO of Nexkraft LTD, he leads initiatives that promote digital literacy, cybersecurity awareness, and sustainable business practices.
          </p>

          <p className="text-slate-950">
            His work extends beyond business, encompassing education through ICT Olympiad Bangladesh, innovative solutions through various ventures, and thought leadership through publications and speaking engagements. Shahriar continues to inspire others to pursue excellence with integrity and purpose.
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
