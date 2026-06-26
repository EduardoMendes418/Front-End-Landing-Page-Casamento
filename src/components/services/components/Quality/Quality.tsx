"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export function Quality() {
  return (
    <Section className="bg-white py-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <Image src="/service/Rectangle 451.svg" alt="Quality" fill className="object-cover" />
            </div>
            <div className="space-y-12">
                <div className="space-y-6">
                    <Typography variant="h2" className="text-6xl serif-italic font-light text-primary/80">Quality Service</Typography>
                    <Typography variant="p" className="text-lg text-primary/50 font-light leading-relaxed max-w-md">
                        On your big day, you can count on me to turn fleeting moments into timeless treasures you will cherish for generations.
                    </Typography>
                </div>
                <Link href="/contact" className="inline-block px-12 py-5 bg-[#EAE3D9] text-[10px] tracking-[0.4em] uppercase font-bold text-primary/80 hover:bg-secondary/10 transition-colors">
                    Enquire Now
                </Link>
                <div className="relative aspect-[16/9] w-full mt-12">
                     <Image src="/service/Rectangle 452.svg" alt="Rings" fill className="object-cover" />
                </div>
            </div>
        </div>
      </Container>
    </Section>
  );
}
