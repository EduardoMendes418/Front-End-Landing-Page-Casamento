"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";

export function AboutSection() {
  return (
    <Section className="relative overflow-hidden bg-white py-40 md:py-64">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
          
          {/* Vertical Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block lg:col-span-1"
          >
            <span className="vertical-text text-[9px] tracking-[1em] uppercase text-black/30 font-bold">
              EST. 2014 &mdash; BIOGRAPHY
            </span>
          </motion.div>

          {/* Broken Grid Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative lg:pr-16"
          >
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl z-10 transition-transform duration-1000 hover:scale-[1.03]">
              <Image 
                src="/Author Bio Photo.svg" 
                alt="Photographer Profile" 
                fill 
                className="object-cover" 
              /> 
            </div>
            <div className="absolute -top-12 -left-12 w-72 h-72 border border-secondary/10 -z-0 hidden lg:block" />
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-6 lg:pl-20 space-y-20"
          >
            <div className="space-y-10">
              <div className="space-y-6">
                <span className="luxury-label">The Artist Behind the Lens</span>
                <Typography variant="h2" className="text-huge serif-italic leading-[0.8] tracking-tighter text-primary">
                  Soul & <br />
                  <span className="not-italic font-light tracking-[-0.05em]">Vision</span>
                </Typography>
              </div>
              <div className="h-[1px] w-32 bg-secondary/30" />
            </div>

            <div className="space-y-12 max-w-xl">
              <Typography variant="p" className="text-xl md:text-2xl leading-relaxed text-primary/70 font-light tracking-wide">
                I believe that beauty resides in the raw and the real. My approach is not just to take photos, but to capture the invisible energy that makes your story unique.
              </Typography>
              <Typography variant="p" className="text-sm md:text-base leading-relaxed text-secondary/80 serif-italic italic pl-10 border-l border-secondary/20 py-4">
                &quot;We don&apos;t just record what we see, but how we feel the moment.&quot;
              </Typography>
            </div>

            <div className="pt-8">
              <Link 
                href="/about" 
                className="luxury-underline text-[10px] tracking-[0.6em] font-bold uppercase transition-all"
              >
                Discover More
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
