"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ProcessSteps() {
  return (
    <Section className="bg-white pb-40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
          {/* Row 1 */}
          <div className="relative aspect-[3/4] md:aspect-square">
            <Image src="/service/Rectangle 442.svg" alt="Step 1" fill className="object-cover object-center" />
          </div>
          <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-6 bg-white border-y md:border-y-0 md:border-b border-black/5">
            <span className="text-5xl font-serif text-secondary/40">1</span>
            <div className="h-[1px] w-12 bg-secondary/30" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold">BREAKING THE ICE</span>
            <p className="text-sm text-primary/40 leading-relaxed font-light">Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam.</p>
          </div>
          <div className="relative aspect-[3/4] md:aspect-square">
            <Image src="/service/Rectangle 443.svg" alt="Detail" fill className="object-cover object-center" />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-6 bg-white order-last md:order-none">
            <span className="text-5xl font-serif text-secondary/40">2</span>
            <div className="h-[1px] w-12 bg-secondary/30" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold">PLANNING & PREPARATION</span>
            <p className="text-sm text-primary/40 leading-relaxed font-light">Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra</p>
          </div>
          <div className="relative aspect-[3/4] md:aspect-square">
            <Image src="/service/Rectangle 447.svg" alt="Portrait" fill className="object-cover object-center" />
          </div>
          <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-6 bg-white">
            <span className="text-5xl font-serif text-secondary/40">3</span>
            <div className="h-[1px] w-12 bg-secondary/30" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold">SESSION COVERAGE</span>
            <p className="text-sm text-primary/40 leading-relaxed font-light">Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra</p>
          </div>

          {/* Row 3 */}
          <div className="relative aspect-[3/4] md:aspect-square">
            <Image src="/service/Rectangle 452.svg" alt="Venues" fill className="object-cover object-center" />
          </div>
          <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-6 bg-white border-y md:border-y-0 md:border-t border-black/5">
            <span className="text-5xl font-serif text-secondary/40">4</span>
            <div className="h-[1px] w-12 bg-secondary/30" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold">POST-PRODUCTION & DELIVERY</span>
            <p className="text-sm text-primary/40 leading-relaxed font-light">Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.</p>
          </div>
          <div className="relative aspect-[3/4] md:aspect-square">
            <Image src="/service/Rectangle 511.svg" alt="Wedding" fill className="object-cover object-center" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
