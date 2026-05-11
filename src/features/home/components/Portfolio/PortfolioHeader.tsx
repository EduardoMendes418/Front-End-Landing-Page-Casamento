"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";

export function PortfolioHeader() {
  return (
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
  );
}
