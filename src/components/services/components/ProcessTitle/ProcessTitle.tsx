"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";

export function ProcessTitle() {
  return (
    <Section className="bg-white pt-32 pb-16">
        <Container className="text-center space-y-4">
          <span className="text-[12px] tracking-[0.4em] uppercase text-secondary/80 font-medium">PROCESS</span>
          <Typography variant="h2" className="text-5xl md:text-7xl serif-italic font-light tracking-tight text-primary/80">
            What to Expect
          </Typography>
        </Container>
    </Section>
  );
}
