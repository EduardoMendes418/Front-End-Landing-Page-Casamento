"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutImage() {
  return (
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
  );
}
