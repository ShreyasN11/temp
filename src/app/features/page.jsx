import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, BrainCircuit, Utensils, Map } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";
import { Calendar } from "@/components/ui/calendar";


    const files = [
        {
            question: "What workout should I do for weight loss?",
            answer: "For weight loss, a combination of cardio and strength training is recommended. ",
          },
          {
            question: "How often should I exercise?",
            answer: "It's generally recommended to exercise at least 3-5 times a week",
          },
          {
            question: "What are some effective exercises for building muscle?",
            answer: "Compound exercises such as squats, deadlifts, bench presses, and pull-ups are highly effective for building muscle. ",
          },
          {
            question: "How can I stay motivated to work out?",
            answer: "Setting realistic goals, finding a workout buddy, tracking your progress",
          },
          {
            question: "What should I eat before a workout?",
            answer: "A balanced pre-workout meal should include carbohydrates for energy .",
          },
    ];

const features = [
    {
        Icon: BrainCircuit,
        name: "AI Chatbot",
        description: "Get personalized fitness and diet advice instantly.",
        href: "/chat",
        cta: "Chat now",
        className: "col-span-3 lg:col-span-1",
        background: (
          <Marquee
            pauseOnHover
            className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_20%,#000_50%)]"
          >
            {files.map((f, idx) => (
              <figure
                key={idx}
                className={cn(
                  "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                  "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                  "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                  "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                )}
              >
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-black">
                      {f.question}
                    </figcaption>
                  </div>
                </div>
                <blockquote className="mt-2 text-xs">{f.answer}</blockquote>
              </figure>
            ))}
          </Marquee>
        ),
    },    
    {
      Icon: Map,
      name: "Explore Workouts",
      description: "Find and exercises suitable for you.",
      href: "/workout",
      cta: "Find classes",
      className: "col-span-3 lg:col-span-2 relative",
      backgorund: (
        <div className="z-10 absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90" style={{ backgroundImage: "url('/images/locomotive.png')" }} />
      )
    },
    {
      Icon: Utensils,
      name: "Nutrition Recommender",
      description: "Get meal plans based on your fitness goals.",
      href: "/features/nutrition",
      cta: "Get recommendations",
      className: "col-span-3 lg:col-span-2",
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      description: "Get alerts for class schedules and progress updates.",
      href: "#",
      cta: "Manage notifications",
      className: "col-span-3 lg:col-span-1",
      background: (
        <Calendar
          mode="single"
          selected={new Date(2022, 4, 11, 0, 0, 0)}
          className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
        />
      )
    },
  ];

function Page() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-500 via-gray-400 to-gray-300 pt-24">
        <div className="w-full max-w-6xl p-6 md:p-12">
          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    );
  }
  
  export default Page;
  

