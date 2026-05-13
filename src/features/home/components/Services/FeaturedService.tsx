"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";

interface FeaturedServiceProps {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
}

export function FeaturedService({ id, name, subtitle, image, description }: FeaturedServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
    >
      <div className="lg:col-span-8 relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-muted group">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-1000" />
      </div>
      <div className="lg:col-span-4 lg:pl-12 space-y-6">
        <span className="luxury-label">{id} &mdash; Travel</span>
        <Typography variant="h3" className="text-5xl serif-italic">
          {name} <br />
          <span className="not-italic font-light opacity-50">{subtitle}</span>
        </Typography>
        <Typography variant="p" className="text-base text-primary/50 leading-relaxed font-light">
          {description}
        </Typography>
      </div>
    </motion.div>
  );
}
