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
                Best National Event Planning Company Award
              </p>
              <p className="w-3/4">
                Recognized for excellence in delivering top-tier event planning
                services across the country, setting industry standards in
                creativity, organization, and client satisfaction.
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
                Best National Event Planning Company Award
              </p>
              <p className="lg:w-3/4">
                Recognized for excellence in delivering top-tier event planning
                services across the country, setting industry standards in
                creativity, organization, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
