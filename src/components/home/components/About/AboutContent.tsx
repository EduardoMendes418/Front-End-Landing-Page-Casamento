"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";

export function AboutContent() {
  return (
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
  );
}
