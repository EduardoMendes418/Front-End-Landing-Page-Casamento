"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface PortfolioItemProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  index?: number;
  variants: Variants;
  showDetails?: boolean;
}

export function PortfolioItem({ 
  src, 
  alt, 
  className, 
  imageClassName, 
  index, 
  variants,
  showDetails 
}: PortfolioItemProps) {
  const displayIndex = index !== undefined ? (index + 1).toString().padStart(2, '0') : null;

  return (
    <motion.div 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("group relative overflow-hidden bg-white", className)}
    >
      <div className={cn("relative overflow-hidden", imageClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 group-hover:bg-black/0 transition-colors duration-1000" />
        
        {showDetails && (
          <div className="absolute bottom-16 left-16 flex flex-col gap-4">
            <span className="text-[9px] tracking-[0.8em] uppercase text-white/80 font-bold">
              {displayIndex} / {alt.toUpperCase()}
            </span>
            <span className="text-white serif-italic text-4xl drop-shadow-sm">{alt}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
