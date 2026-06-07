"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";

export function InvestmentHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center space-y-10 max-w-3xl mx-auto"
    >
      <span className="luxury-label">The Investment</span>
      <Typography variant="h2" className="text-4xl md:text-5xl serif-italic tracking-tighter leading-none">
        Collections & <br />
        <span className="not-italic font-light tracking-[-0.05em]">Experience</span>
      </Typography>
      <div className="h-[1px] w-32 bg-secondary/30 mt-12" />
    </motion.div>
  );
}
