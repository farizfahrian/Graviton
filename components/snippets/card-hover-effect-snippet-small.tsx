import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemoSmall() {
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
    number: "#2",
    title: "Finding Your Perfect Fit",
    description:
      "Choose the perfect plan for your needs. Also, you have the freedom to pause or cancel your plan.",

  },
  {
    number: "#3",
    title: "Make a Request",
    description:
      "Ready to see your vision come to life? Submit your first project request through our Slack channels.",

  },
  {
    number: "#4",
    title: "Seamless Execution",
    description:
      "We waste no time in getting down to business. Experience the speed and efficiency of our team.",

  },
  {
    number: "#5",
    title: "Feedback & Refinement",
    description:
      "Share feedback seamlessly. We prioritize your input to continuously refine your strategy.",

  },
  {
    number: "#6",
    title: "Results You Can See",
    description:
      "Monitor progress through regular reports. We analyze data and refine your strategy for peak results.",

  },

];
