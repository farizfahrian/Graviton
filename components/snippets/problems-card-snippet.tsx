import { HoverEffect } from "@/components/ui/problem-card";
import { PiLock, PiMonitor, PiStorefront } from "react-icons/pi";
import { Player } from '@lottiefiles/react-lottie-player';

export function ProblemsSnippet() {
  return (
    <div className="max-w-8xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon:
      <div className="bg-blue-100 p-4 rounded-full">
        <Player
          autoplay
          loop
          src="icon/person.json"
          style={{ height: '70px', width: '70px' }}
        ></Player>
      </div>,
    title: "Invisible to Potential Leads",
    description:
      "You're not reaching the vast audience searching online for products or services like yours.",

  },
  {
    icon:
      <div className="bg-blue-100 p-4 rounded-full">
        <Player
          autoplay
          loop
          src="icon/speaker.json"
          style={{ height: '70px', width: '70px' }}
        ></Player>
      </div>,
    title: "Limited Brand Awareness",
    description:
      "A robust online presence is crucial for branding and trust-building with your audience.",

  },
  {
    icon:
      <div className="bg-blue-100 p-4 rounded-full">
        <Player
          autoplay
          loop
          src="icon/graph.json"
          style={{ height: '70px', width: '70px' }}
        ></Player>
      </div>,
    title: "Falling Behind the Competition",
    description:
      "Your rival's strong online presence is attracting more clients, leaving you trailing behind.",

  },
];
