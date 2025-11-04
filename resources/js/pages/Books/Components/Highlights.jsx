import book1 from "../../../assets/books/company_award_book.png";
import book2 from "../../../assets/books/uddokta_book.png";

const Highlights = () => {
  return (
    <div className="bg-slate-900 py-8">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="text-white flex items-center gap-6">
            <div>
              <div className="w-24">
                <img className="w-full" src={book1} alt="" />
              </div>
            </div>

            <div className="flex-1">
              <p className="text-lg font-semibold mb-4">
                Best-Selling Technology Book Award
              </p>
              <p className="w-3/4">
                "Chat GPT: Risk or Opportunity?" has been recognized as a pioneering work in exploring the implications of AI technology for businesses and society in Bangladesh.
              </p>
            </div>
          </div>

          <div className="text-white flex items-center gap-6">
            <div>
              <div className="w-24">
                <img className="w-full" src={book2} alt="" />
              </div>
            </div>

            <div className="flex-1">
              <p className="text-lg font-semibold mb-4">
                Innovation in Business Literature Award
              </p>
              <p className="lg:w-3/4">
                Honored for breaking new ground in business literature by addressing contemporary challenges of AI adoption and digital transformation in emerging markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
