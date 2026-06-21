"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Typography } from "@/components/ui/typography";

interface ServicePackageCardProps {
  title: string;
  image: string;
  price: string;
  features: string[];
  variants: Variants;
}

export function ServicePackageCard({ title, image, price, features, variants }: ServicePackageCardProps) {
  return (
    <motion.div 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center text-center space-y-8"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="space-y-6 flex flex-col items-center">
        <Typography variant="h2" className="text-5xl serif-italic font-light">{title}</Typography>
        <ul className="space-y-4 text-sm text-primary/60 font-light max-w-[250px]">
          {features.map((feature, fIdx) => (
            <li key={fIdx} className="border-b border-black/5 pb-2 last:border-0">{feature}</li>
          ))}
        </ul>
        <div className="pt-4 flex flex-col items-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-secondary font-bold mb-2">PER SESSION</span>
          <span className="text-4xl font-serif text-primary/80">${price}</span>
        </div>
      </div>
    </motion.div>
  );
}
