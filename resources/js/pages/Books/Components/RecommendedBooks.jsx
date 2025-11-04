import img1 from "../../../assets/books/recommended_book1.png";
import img2 from "../../../assets/books/recommended_book2.png";
import img3 from "../../../assets/books/recommended_book3.png";
import img4 from "../../../assets/books/recommended_book4.png";
import img5 from "../../../assets/books/recommended_book5.png";
import publication from "../../../assets/books/publication_image.png";
import React from "react";

const RecommendedBooks = () => {
  return (
    <div className="bg-white py-18">
      <div>
        <h1 className="text-5xl font-semibold text-slate-950 text-center mb-12">
          Recommended Books
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 ">
          <div className="p-14 bg-slate-100 border border-slate-300">
            <img src={img1} alt="" />
          </div>
          <div className="p-14 bg-slate-100 border border-slate-300">
            <img src={img2} alt="" />
          </div>
          <div className="p-14 bg-slate-100 border border-slate-300">
            <img src={img3} alt="" />
          </div>
          <div className="p-14 bg-slate-100 border border-slate-300">
            <img src={img4} alt="" />
          </div>
          <div className="p-14 bg-slate-100 border border-slate-300">
            <img src={img5} alt="" />
          </div>
        </div>

        <div className="w-11/12 lg:w-9/12 mx-auto mt-18">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="lg:w-1/2 ">
              <h1 className="text-5xl font-semibold text-slate-950 mb-8">
                Publication Summary
              </h1>
              <p className="text-slate-950 text-lg mb-8">
                "Chat GPT: Risk or Opportunity?" has been widely acclaimed for its insightful analysis of artificial intelligence's role in modern business. The book provides practical guidance for entrepreneurs and business leaders navigating the AI revolution.
              </p>
              <p className="text-slate-950 text-lg">
                Through real-world examples and strategic frameworks, Shahriar Khan offers a balanced perspective on leveraging AI opportunities while managing associated risks, making it an essential read for anyone interested in the future of technology and business.
              </p>
            </div>

            <div className="flex-1 flex items-center justify-end">
              <img src={publication} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedBooks;
