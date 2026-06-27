"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";

export function QuoteBanner() {
  return (
    <Section className="bg-[#FAF9F6] py-32">
      <Container className="max-w-4xl text-center space-y-12">
          <div className="relative w-16 h-16 mx-auto mb-8 opacity-60">
            <Image src="/service/Author Bio Photo.svg" alt="Icon" fill className="object-contain" />
          </div>
          <Typography variant="h2" className="text-4xl md:text-5xl serif-italic font-light leading-snug text-primary/70">
            Celebrate your love with stunning images that <br /> will be cherished for a lifetime
          </Typography>
      </Container>
    </Section>
  );
}
