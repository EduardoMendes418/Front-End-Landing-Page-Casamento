"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

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
            <motion.div 
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-8"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
              </div>
              <div className="space-y-6 flex flex-col items-center">
                <Typography variant="h2" className="text-5xl serif-italic font-light">{pkg.title}</Typography>
                <ul className="space-y-4 text-sm text-primary/60 font-light max-w-[250px]">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="border-b border-black/5 pb-2 last:border-0">{feature}</li>
                  ))}
                </ul>
                <div className="pt-4 flex flex-col items-center">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-secondary font-bold mb-2">PER SESSION</span>
                  <span className="text-4xl font-serif text-primary/80">${pkg.price}</span>
                </div>
              </div>
            </motion.div>
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
