import { HoverEffect } from "@/components/ui/card-hover-effect";
import { number } from "zod";

export function CardHoverEffectDemoUp() {
  return (
    <div className="mx-auto max-w-7xl">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    number: "#1",
    title: "Kickoff Conversation",
    description:
      "Let's chat! In a quick meeting, we'll get to know you, your business, and your vision for digital dominance.",

  },
  {
    number: "#3",
    title: "Make a Request",
    description:
      "Ready to see your vision come to life? Submit your first project request through our Slack channels.",

  },
  {
    number: "#5",
    title: "Feedback & Refinement",
    description:
      "Share feedback seamlessly. We prioritize your input to continuously refine your strategy.",

  },

];
