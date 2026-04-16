"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";

const images = [
  { src: "/Rectangle 424.svg", alt: "Ceremony" },
  { src: "/Rectangle 425.svg", alt: "Editorial" },
  { src: "/Rectangle 427.svg", alt: "Portraits" },
  { src: "/Rectangle 511.svg", alt: "Details" },
  { src: "/Rectangle 519.svg", alt: "The Dance" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

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
        <div className="flex flex-col md:flex-row items-end justify-between gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-10 max-w-3xl"
          >
            <span className="luxury-label">The Gallery</span>
            <Typography variant="h2" className="text-huge serif-italic leading-[0.8] tracking-tighter">
              Timeless <br />
              <span className="not-italic font-light tracking-[-0.05em]">Stories</span>
            </Typography>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-end gap-10"
          >
            <div className="h-[1px] w-40 bg-black/20" />
            <Link 
              href="/portfolio" 
              className="luxury-underline text-[10px] tracking-[0.6em] font-bold uppercase pb-2"
            >
              View Full Gallery
            </Link>
          </motion.div>
        </div>

        {/* Impact Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:auto-rows-[180px]">
          {/* Main Large Image */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-7 md:row-span-4 group relative overflow-hidden bg-white"
          >
            <div className="relative h-[600px] md:h-full overflow-hidden">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0  group-hover:bg-black/0 transition-colors duration-1000" />
              <div className="absolute bottom-16 left-16 flex flex-col gap-4">
                <span className="text-[9px] tracking-[0.8em] uppercase text-white/80 font-bold">01 / CEREMONY</span>
                <span className="text-white serif-italic text-4xl drop-shadow-sm">{images[0].alt}</span>
              </div>
            </div>
          </motion.div>

          {/* Side Images */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-5 md:row-span-3 group relative overflow-hidden bg-white md:mt-24"
          >
            <div className="relative h-[450px] md:h-full">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0  group-hover:bg-black/0 transition-colors duration-1000" />
            </div>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-3 group relative overflow-hidden bg-white lg:-mt-12"
          >
            <div className="relative h-[450px] md:h-full">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0  group-hover:bg-black/0 transition-colors duration-1000" />
            </div>
          </motion.div>

          {/* Bottom Images */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-5 md:row-span-4 group relative overflow-hidden bg-white lg:mt-12"
          >
            <div className="relative h-[400px] md:h-full">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 group-hover:bg-black/0 transition-colors duration-1000" />
            </div>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-3 md:row-span-3 group relative overflow-hidden bg-white lg:mt-24"
          >
            <div className="relative h-[350px] md:h-full">
              <Image
                src={images[4].src}
                alt={images[4].alt}
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0  group-hover:bg-black/0 transition-colors duration-1000" />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
