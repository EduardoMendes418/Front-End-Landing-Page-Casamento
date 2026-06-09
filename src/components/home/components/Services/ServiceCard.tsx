"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Typography } from "@/components/ui/typography";

interface ServiceCardProps {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  variants: Variants;
}

export function ServiceCard({ id, name, subtitle, image, description, variants }: ServiceCardProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group space-y-8"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute top-6 left-6 flex flex-col items-center">
          <span className="text-[10px] font-bold text-white/80 tracking-[0.4em] uppercase">{id}</span>
          <div className="h-12 w-[1px] bg-white/30 mt-4" />
        </div>
      </div>
      <div className="space-y-4">
        <Typography variant="h3" className="text-4xl serif-italic">
          {name} <span className="not-italic font-light opacity-50">{subtitle}</span>
        </Typography>
        <Typography variant="p" className="text-sm text-primary/40 leading-relaxed max-w-xs">
          {description}
        </Typography>
      </div>
    </motion.div>
  );
}
