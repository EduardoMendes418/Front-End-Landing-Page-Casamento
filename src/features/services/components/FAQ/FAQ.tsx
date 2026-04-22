"use client";

import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";

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
            <div key={idx} className="flex items-center gap-8 py-8 border-b border-black/5 group cursor-pointer">
              <Plus className="w-5 h-5 text-secondary/60 group-hover:rotate-90 transition-transform duration-500" />
              <span className="text-[11px] tracking-[0.3em] font-bold uppercase text-primary/70">{q}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
