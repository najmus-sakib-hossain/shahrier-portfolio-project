import { useState, useEffect } from "react";
import linkedin from "../../../assets/home/linkedin.svg";
import dribble from "../../../assets/home/dribble.svg";
import behance from "../../../assets/home/behance.svg";

const Banner = () => {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");

    if (!hasSeenSplash) {
      setShowSplash(true);
      setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem("hasSeenSplash", "true");
      }, 2000);
    }
  }, []);

  return (
    <div className="w-full mx-auto h-screen relative">
      {/* Splash Screen */}
      {showSplash && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50 transition-opacity duration-1000">
          <h1 className="text-5xl font-bold text-black animate-bounce special-text">
            Shahriar Khan
          </h1>
        </div>
      )}

      {/* Main Content */}
      {!showSplash && (
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
          {/* Background Image Section */}
          <div className="lg:col-span-2 h-full">
            <div className="h-[500px] md:h-[600px] lg:h-[800px] relative">
              <div
                className="absolute inset-0 w-full h-full flex items-end justify-start text-white"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 41.23%, #000 99.94%)",
                }}
              >
                <p className="text-4xl lg:text-6xl font-semibold p-5 lg:p-20">
                  Embrace the extraordinary. <br /> Live your fullest life.
                </p>
              </div>
            </div>

            <div className="py-6 bg-[#3b3939d3] bg-opacity-10 backdrop-blur-sm">
              <div className="w-11/12 mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-auto">
                  <div>
                    <h1 className="text-white font-semibold text-4xl mb-3 text-center">
                      11
                    </h1>
                    <p className="text-lg text-slate-300 text-center">
                      Years Journey
                    </p>
                  </div>

                  <div>
                    <h1 className="text-white font-semibold text-4xl mb-3 text-center">
                      200
                    </h1>
                    <p className="text-lg text-slate-300 text-center">
                      Projects
                    </p>
                  </div>

                  <div>
                    <h1 className="text-white font-semibold text-4xl mb-3 text-center">
                      6
                    </h1>
                    <p className="text-lg text-slate-300 text-center">
                      Certification
                    </p>
                  </div>

                  <div>
                    <h1 className="text-white font-semibold text-4xl mb-3 text-center">
                      5
                    </h1>
                    <p className="text-lg text-slate-300 text-center">
                      Int Article
                    </p>
                  </div>

                  <div>
                    <h1 className="text-white font-semibold text-4xl mb-3 text-center">
                      4
                    </h1>
                    <p className="text-lg text-slate-300 text-center">Books</p>
                  </div>

                  <div>
                    <h1 className="text-white font-semibold text-4xl mb-3 text-center">
                      4
                    </h1>
                    <p className="text-lg text-slate-300 text-center">Books</p>
                  </div>

                  <div>
                    <h1 className="text-white font-semibold text-4xl mb-3 text-center">
                      100
                    </h1>
                    <p className="text-lg text-slate-300 text-center">
                      Mentoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          {/* <div className="lg:col-span-1 h-full">
            <div className="h-[500px] md:h-[600px] lg:h-[800px] flex flex-col justify-center">
              <div className="flex items-center gap-4 px-5 lg:px-20 mb-6 lg:mt-48">
                <p className="text-3xl font-medium text-slate-900">
                  Entrepreneur
                </p>
                <div className="w-20 h-1 bg-slate-900"></div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-semibold text-slate-900 px-5 lg:px-20">
                Connecting brands & people through experiences.
              </h1>
            </div>

            <div className="py-[46px] bg-slate-900">
              <div className="flex items-center justify-center gap-4">
                <h1 className="text-lg font-bold text-white">Social Media:</h1>

                <div className="flex items-center gap-4">
                  <img src={linkedin} alt="" />
                  <a
                    className="text-lg text-white font-normal"
                    href="https://www.linkedin.com/in/mohammadshahriarkhan/"
                  >
                    Linkedin
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <img src={dribble} alt="" />
                  <a className="text-lg text-white font-normal" href="">
                    Dribble
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <img src={behance} alt="" />
                  <a className="text-lg text-white font-normal" href="">
                    Behance
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          <img
            src="./home_banner.png"
            alt="Home Banner"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Banner;
