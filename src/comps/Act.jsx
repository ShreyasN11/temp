import { FocusCards } from "@/components/ui/focus-cards";
import Image from "next/image";

export default function Act() {
  const cards = [
    {
      title: "Explore Workouts",
      src: "/images/maven.jpg",
    },
    {
      title: "Find Nearby Classes",
      src: "/images/panda.jpg",
    },
    {
      title: "Interact with the community",
      src: "/images/google.jpg",
    },
    {
      title: "Nutrition Recommended for you",
      src: "/images/healthy.jpg",
    },
    {
      title: "Get Personalized Recommendations",
      src: "/images/wix.jpg",
    },
    {
      title: "Set Goals and Develop a fitter you",
      src: "/images/gg.jpg",
    },
  ];

  return (
    <div className=" bg-gray-200">
      <div className="py-20">
      <FocusCards cards={cards} />
      </div>
    </div>
  );
}
