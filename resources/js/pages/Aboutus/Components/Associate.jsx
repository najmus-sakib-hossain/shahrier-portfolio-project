import React from "react";
import associateImg from "../../../assets/about_me/associate.png";
import eClub from "../../../assets/about_me/e-club.svg";
import basis from "../../../assets/about_me/basis.svg";

const Associate = () => {
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto  py-16 bg-white">
      <div
        className=" h-[700px] relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, #020617aa, #02061700), url(${associateImg})`,
          borderRadius: "20px",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-start justify-end ml-12">
          <h1 className="text-white text-7xl font-semibold mb-4">Associate</h1>
          <p className="text-white lg:w-1/3 mb-20">
            Dedicated to fostering collaboration and achieving results. Build
            meaningful relationships that drive success. Expertise ensures your
            vision is supported every step of the way.
          </p>

          <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 mb-12">
            <img src={eClub} alt="" />
            <img src={basis} alt="" />
            <img src={basis} alt="" />
            <img src={basis} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Associate;
