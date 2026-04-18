"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <Section className="bg-white py-40 md:py-64 overflow-hidden border-t border-white">
      <Container className="max-w-6xl mx-auto text-center space-y-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <Quote className="h-20 w-20 text-secondary/15 mx-auto" strokeWidth={0.5} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" className="text-3xl md:text-6xl serif-italic leading-[1.1] tracking-tight text-primary max-w-5xl mx-auto">
            &quot;The photos were simply breathtaking. Every detail, every emotion... it was like reliving the most beautiful day of our lives. Thank you for capturing our essence so perfectly.&quot;
          </Typography>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="pt-12 flex flex-col items-center gap-6"
        >
          <div className="h-[1px] w-16 bg-secondary/30" />
          <div className="space-y-2">
            <Typography variant="h4" className="font-sans text-[10px] tracking-[0.6em] font-bold uppercase text-primary">Mariana & Lucas</Typography>
            <Typography variant="muted" className="text-[9px] tracking-[0.4em] uppercase text-primary/40">March 2025 &mdash; Tuscany, Italy</Typography>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
