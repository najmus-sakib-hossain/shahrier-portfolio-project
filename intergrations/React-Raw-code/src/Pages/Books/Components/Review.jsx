import React from "react";
import review_client from "../../../assets/books/review.png";
import colon from "../../../assets/books/colon.svg";
const Review = () => {
  return (
    <div className="bg-[#2E5AFF] py-18">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <h1 className="text-5xl font-semibold text-white text-center mb-8">
          Review
        </h1>
        <div className="mb-12 relative">
          <p className="text-lg text-white text-center lg:w-3/4 mx-auto  relative z-10">
            The Nightingale has easily found its way to one of my favorite books
            to recommend. Although some may feel daunted by the over 300 page
            book, it is worth every page. The characters are well written and
            relatable. Isabelle is definitely one of my all time favorite
            heroes.
          </p>
          <div className="absolute -top-8 z-0 hidden lg:block">
            <img src={colon} alt="" />
          </div>
        </div>

        <div className="flex items-center justify-center mb-6">
          <img src={review_client} alt="" />
        </div>
        <h3 className="text-white font-semibold text-2xl text-center mb-2">
          Shah Alam Chowdhury
        </h3>
        <p className="text-slate-200 mb-2 text-center">Managing Director</p>
        <p className="text-slate-200 mb-2 text-center">AB Company</p>
      </div>
    </div>
  );
};

export default Review;
