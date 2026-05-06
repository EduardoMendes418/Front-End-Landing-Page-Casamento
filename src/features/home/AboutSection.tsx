"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AboutImage } from "./components/About/AboutImage";
import { AboutContent } from "./components/About/AboutContent";

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

          <AboutImage />
          <AboutContent />
        </div>
      </Container>
    </Section>
  );
}
