"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { ServicePackageCard } from "./ServicePackageCard";
import { fadeUp } from "@/utils/animations";

const packages = [
  {
    title: "Wedding",
    image: "/service/Rectangle 443.svg",
    price: "799",
    features: ["500+ High-Quality Photos", "6 Hours HD Footage", "*Additional Photographer subject to charge", "*Videographer subject to charge"]
  },
  {
    title: "Portrait",
    image: "/service/Rectangle 447.svg",
    price: "399",
    features: ["Atleast 10 High Quality Photos", "Professionally Edited", "Hourly rates applied", "*Videographer subject to charge"]
  },
  {
    title: "Engagement",
    image: "/service/Rectangle 452.svg",
    price: "799",
    features: ["200 High-Quality Photos", "3 Hours HD Footage", "*Additional Photographer subject to charge", "*Videographer subject to charge"]
  }
];

export function Packages() {
  return (
    <Section className="bg-white pb-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {packages.map((pkg, idx) => (
            <ServicePackageCard 
              key={idx} 
              {...pkg} 
              variants={fadeUp} 
            />
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <Link href="/contact" className="px-12 py-4 border border-secondary/30 text-[10px] tracking-[0.4em] uppercase font-bold text-primary/80 hover:bg-secondary/5 transition-colors">
            GET IN TOUCH
          </Link>
        </div>
      </Container>
    </Section>
  );
}
