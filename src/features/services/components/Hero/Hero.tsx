"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";

export function Hero() {
  return (
    <div className="w-full">
      <div className="relative w-full aspect-[21/9] min-h-[400px]">
        <Image
          src="/service/Rectangle 511.svg"
          alt="Services Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
      <Section className="bg-white pt-24 pb-16">
        <Container className="text-center space-y-4">
          <span className="text-[12px] tracking-[0.4em] uppercase text-secondary/80 font-medium">Services</span>
          <Typography variant="h1" className="text-5xl md:text-7xl serif-italic font-light tracking-tight text-primary/80">
            PHOTOGRAPHY PACKAGES
          </Typography>
        </Container>
      </Section>
    </div>
  );
}
