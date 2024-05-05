import { HoverEffect } from "@/components/ui/card-hover-effect";
import { number } from "zod";

export function CardHoverEffectDemoDown() {
  return (
    <div className="mx-auto max-w-7xl">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    number: "#2",
    title: "Finding Your Perfect Fit",
    description:
      "Choose the perfect plan for your needs. Also, you have the freedom to pause or cancel your plan.",

  },
  {
    number: "#4",
    title: "Seamless Execution",
    description:
      "We waste no time in getting down to business. Experience the speed and efficiency of our team.",

  },
  {
    number: "#6",
    title: "Results You Can See",
    description:
      "Monitor progress through regular reports. We analyze data and refine your strategy for peak results.",

  },

];
