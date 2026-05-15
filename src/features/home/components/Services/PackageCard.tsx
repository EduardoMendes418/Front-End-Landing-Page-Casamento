"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  index: number;
  variants: Variants;
}

export function PackageCard({ 
  name, 
  price, 
  description, 
  features, 
  featured, 
  index, 
  variants 
}: PackageCardProps) {
  return (
    <motion.div
      variants={variants}
      className={cn(
        "group p-12 md:p-20 flex flex-col justify-between transition-all duration-1000 hover:bg-[#FAF9F6] relative",
        index !== 2 && "md:border-r border-black/5"
      )}
    >
      {featured && (
        <div className="absolute top-0 left-0 w-full h-[3px] bg-secondary shadow-sm" />
      )}
      
      <div className="space-y-16">
        <div className="space-y-6">
          <span className="text-[9px] tracking-[0.6em] font-bold uppercase text-secondary/50">Collection</span>
          <Typography variant="h3" className="text-5xl serif-italic tracking-tight">{name}</Typography>
        </div>
        
        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <span className="text-[9px] font-bold text-primary/30 uppercase tracking-[0.4em]">Starting at</span>
            <span className="text-5xl font-light tracking-tighter">R$ {price}</span>
          </div>
          <Typography variant="p" className="text-primary/50 text-sm font-light leading-relaxed min-h-[48px]">
            {description}
          </Typography>
        </div>

        <div className="h-[1px] w-12 bg-secondary/20" />

        <ul className="space-y-6">
          {features.map((feature) => (
            <li key={feature} className="text-[10px] tracking-[0.3em] text-primary/60 uppercase flex items-center gap-5">
              <div className="h-[1px] w-4 bg-secondary/40" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-24">
        <Link 
          href="/contact" 
          className="luxury-underline inline-flex items-center gap-4 text-[10px] tracking-[0.6em] font-bold uppercase"
        >
          Request Proposal <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-3" />
        </Link>
      </div>
    </motion.div>
  );
}
