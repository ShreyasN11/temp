import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Emily",
    username: "@emilyfit",
    body: "This platform has completely changed my workout routine! The personalized plans are a game-changer.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Michael",
    username: "@mikeyoga",
    body: "I found the perfect online yoga class for my needs. The instructors are amazing!",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Sophia",
    username: "@sophia_wellness",
    body: "I love how easy it is to find guided workouts tailored to my goals. Highly recommended!",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "David",
    username: "@david_mindbody",
    body: "The meditation and yoga programs have helped me stay stress-free and energized.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Jessica",
    username: "@jess_active",
    body: "A must-have for anyone looking for a fitness guide at home. The suggestions are spot on!",
    img: "https://avatar.vercel.sh/jessica",
  },
  {
    name: "Daniel",
    username: "@daniel_yoga",
    body: "I was a beginner at yoga, but this website made it so easy to get started. Love it!",
    img: "https://avatar.vercel.sh/daniel",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold dark:text-white">{name}</figcaption>
          <p className="text-sm font-medium dark:text-white/50">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-md">{body}</blockquote>
    </figure>
  );
};

export function Testimonial() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-background p-10">
      <h1 className="text-4xl font-bold text-center mb-8 p-4 md:text-5xl lg:text-6xl">What Users Say About Us</h1>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
