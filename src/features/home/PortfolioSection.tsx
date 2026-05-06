"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PortfolioHeader } from "./components/Portfolio/PortfolioHeader";
import { PortfolioItem } from "./components/Portfolio/PortfolioItem";
import { fadeUp } from "@/lib/animations";

const images = [
  { src: "/Rectangle 424.svg", alt: "Ceremony" },
  { src: "/Rectangle 425.svg", alt: "Editorial" },
  { src: "/Rectangle 427.svg", alt: "Portraits" },
  { src: "/Rectangle 511.svg", alt: "Details" },
  { src: "/Rectangle 519.svg", alt: "The Dance" },
];

export function PortfolioSection() {
  return (
    <Section className="bg-[#FAF9F6] py-40 md:py-64 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute top-64 -right-12 hidden xl:block"
      >
        <span className="vertical-text text-[9px] tracking-[1.2em] uppercase text-black font-bold">
          SELECTED WORKS &mdash; 2024
        </span>
      </motion.div>

      <Container className="space-y-40">
        <PortfolioHeader />

        {/* Impact Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:auto-rows-[180px]">
          <PortfolioItem 
            {...images[0]} 
            index={0}
            variants={fadeUp}
            className="md:col-span-7 md:row-span-4"
            imageClassName="h-[600px] md:h-full"
            showDetails
          />

          <PortfolioItem 
            {...images[1]} 
            variants={fadeUp}
            className="md:col-span-5 md:row-span-3 md:mt-24"
            imageClassName="h-[450px] md:h-full"
          />

          <PortfolioItem 
            {...images[2]} 
            variants={fadeUp}
            className="md:col-span-4 md:row-span-3 lg:-mt-12"
            imageClassName="h-[450px] md:h-full"
          />

          <PortfolioItem 
            {...images[3]} 
            variants={fadeUp}
            className="md:col-span-5 md:row-span-4 lg:mt-12"
            imageClassName="h-[400px] md:h-full"
          />

          <PortfolioItem 
            {...images[4]} 
            variants={fadeUp}
            className="md:col-span-3 md:row-span-3 lg:mt-24"
            imageClassName="h-[350px] md:h-full"
          />
        </div>
      </Container>
    </Section>
  );
}
