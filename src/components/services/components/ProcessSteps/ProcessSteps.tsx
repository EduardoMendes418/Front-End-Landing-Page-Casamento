"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ProcessStepImage, ProcessStepContent } from "./ProcessStepComponents";

const steps = [
  {
    number: 1,
    title: "BREAKING THE ICE",
    description: "Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam.",
    image: "/service/Rectangle 442.svg"
  },
  {
    number: 2,
    title: "PLANNING & PREPARATION",
    description: "Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra",
    image: "/service/Rectangle 447.svg"
  },
  {
    number: 3,
    title: "SESSION COVERAGE",
    description: "Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra",
    image: "/service/Rectangle 443.svg" // Used in row 1 too, but let's follow the original layout
  },
  {
    number: 4,
    title: "POST-PRODUCTION & DELIVERY",
    description: "Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.",
    image: "/service/Rectangle 452.svg"
  }
];

export function ProcessSteps() {
  return (
    <Section className="bg-white pb-40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
          {/* Row 1 */}
          <ProcessStepImage src={steps[0].image} alt="Step 1" />
          <ProcessStepContent 
            number={steps[0].number} 
            title={steps[0].title} 
            description={steps[0].description}
            className="border-y md:border-y-0 md:border-b border-black/5"
          />
          <ProcessStepImage src="/service/Rectangle 443.svg" alt="Detail" />

          {/* Row 2 */}
          <ProcessStepContent 
            number={steps[1].number} 
            title={steps[1].title} 
            description={steps[1].description}
            className="order-last md:order-none"
          />
          <ProcessStepImage src={steps[1].image} alt="Portrait" />
          <ProcessStepContent 
            number={steps[2].number} 
            title={steps[2].title} 
            description={steps[2].description}
          />

          {/* Row 3 */}
          <ProcessStepImage src={steps[3].image} alt="Venues" />
          <ProcessStepContent 
            number={steps[3].number} 
            title={steps[3].title} 
            description={steps[3].description}
            className="border-y md:border-y-0 md:border-t border-black/5"
          />
          <ProcessStepImage src="/service/Rectangle 511.svg" alt="Wedding" />
        </div>
      </Container>
    </Section>
  );
}
