import { useState } from "react";
import all from "../../../assets/life_events/all.svg";
import work from "../../../assets/life_events/work.svg";
import education from "../../../assets/life_events/education.svg";
import meetup from "../../../assets/life_events/meetup.svg";
import family from "../../../assets/life_events/family.svg";
import travel from "../../../assets/life_events/travel.svg";
import achievement from "../../../assets/life_events/achievement.svg";
import All from "./All";

const categories = [
  { id: "all", label: "All", icon: all },
  { id: "work", label: "Work", icon: work },
  { id: "education", label: "Education", icon: education },
  { id: "meetup", label: "Meetup", icon: meetup },
  { id: "family", label: "Family", icon: family },
  { id: "travel", label: "Travel", icon: travel },
  { id: "achievement", label: "Achievement", icon: achievement },
];

// Content for each tab
const categoryContent = {
  all: <All />,
  work: "Work-related experiences, job changes, promotions, and career highlights.",
  education:
    "Education journey including schools, universities, and certifications.",
  meetup: "Networking and social meetups with like-minded individuals.",
  family: "Memorable family moments and important life events.",
  travel: "Exciting travel experiences, destinations visited, and adventures.",
  achievement: "Milestones and accomplishments achieved throughout life.",
};

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="bg-slate-950 py-12">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        {/* Category Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${
                selectedCategory === category.id
                  ? "bg-blue-600 shadow shadow-blue-500/50 scale-105"
                  : "bg-slate-900 hover:bg-slate-800"
              }`}
            >
              <div className="transition-transform duration-300 ease-in-out">
                <img
                  src={category.icon}
                  alt={category.label}
                  className="w-10 h-10"
                />
              </div>
              <p
                className={`text-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "text-white"
                    : "text-gray-300"
                }`}
              >
                {category.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Content Section */}
      <div className="mt-10 text-white">
        {categoryContent[selectedCategory]}
      </div>
    </div>
  );
};

export default Category;
