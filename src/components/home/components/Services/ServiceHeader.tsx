"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";

export function ServiceHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="lg:col-span-5 space-y-12"
    >
      <div className="space-y-6">
        <span className="luxury-label">Our Expertise</span>
        <Typography variant="h2" className="text-4xl md:text-5xl serif-italic leading-[0.8] tracking-tighter">
          Services & <br />
          <span className="not-italic font-light tracking-[-0.05em]">Excellence</span>
        </Typography>
      </div>

      <div className="h-[1px] w-32 bg-secondary/30" />
      <Typography variant="p" className="text-xl text-primary/60 font-light max-w-md leading-relaxed">
        We specialize in documenting the raw emotions and timeless beauty of your unique story through an editorial lens.
      </Typography>
    </motion.div>
  );
}
