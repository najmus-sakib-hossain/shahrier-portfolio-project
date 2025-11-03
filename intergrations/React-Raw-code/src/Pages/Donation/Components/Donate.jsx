import { Link } from "react-router-dom";
import card1 from "../../../assets/donation/donate_card1.png";
import card2 from "../../../assets/donation/donate_card2.png";
import pattern from "../../../assets/donation/vector_pattern.svg";

const Donate = () => {
  const donationCards = [
    { id: 1, image: card1, title: "Donate to homeless children" },
    { id: 2, image: card2, title: "Donate to Gazans in Palestine" },
  ];

  return (
    <div className="bg-slate-950 py-18 relative">
      <h1 className="text-5xl text-white font-semibold underline text-center mb-12">
        Donation
      </h1>
      <div className="absolute right-0 top-0 hidden lg:block">
        <img src={pattern} alt="" />
      </div>

      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {donationCards.map((card) => (
            <div
              key={card.id}
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "flex-end",
                paddingLeft: "36px",
                borderRadius: "20px",
                position: "relative",
              }}
            >
              <h1 className="text-2xl lg:text-5xl text-white font-semibold mb-6">
                {card.title}
              </h1>
              <Link
                to={`/resource/donation/${card.id}`}
                state={({ image: card.image }, { title: card.title })}
              >
                <button className=" text-[#2E5AFF] bg-white px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white mb-8">
                  Donate Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donate;
