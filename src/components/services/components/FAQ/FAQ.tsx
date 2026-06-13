"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { FAQItem } from "./FAQItem";

const faqs = [
  "WHAT IS YOUR PHOTOGRAPHY STYLE?",
  "HOW FAR IN ADVANCE CAN SHOULD WE BOOK YOUR SERVICES?",
  "DO YOU REQUIRE A DEPOSIT, AND WHAT ARE YOUR PAYMENT TERMS?",
  "CAN WE CUSTOMIZE A PHOTOGRAPHY PACKAGE TO FIT YOUR NEEDS?",
  "HOW SOON AFTER THE EVENT WILL I RECEIVE YOUR PHOTOS?"
];

export function FAQ() {
  return (
    <Section className="bg-[#FAF9F6] py-32">
      <Container className="max-w-4xl">
        <div className="text-center space-y-4 mb-20">
          <span className="text-[12px] tracking-[0.4em] uppercase text-secondary/80 font-medium">FAQ</span>
          <Typography variant="h2" className="text-5xl md:text-7xl serif-italic font-light text-primary/80">Any Queries?</Typography>
        </div>
        <div className="space-y-0">
          {faqs.map((q, idx) => (
            <FAQItem key={idx} question={q} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
