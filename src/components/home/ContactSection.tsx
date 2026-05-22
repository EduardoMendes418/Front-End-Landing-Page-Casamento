"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";

export function ContactSection() {
  return (
    <Section className="bg-primary text-white py-40 md:py-64 overflow-hidden relative">
      {/* Decorative Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <span className="text-[25vw] font-serif italic whitespace-nowrap">Luxestudio</span>
      </div>

      <Container className="relative z-10 text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <span className="luxury-label !text-secondary">Are you ready?</span>
          <Typography variant="h2" className="text-huge serif-italic tracking-tighter leading-none">
            Let&apos;s Create <br />
            <span className="not-italic font-light tracking-[-0.05em]">Magic Together</span>
          </Typography>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-xl md:text-2xl font-light tracking-wide leading-relaxed"
        >
          Limited dates available for 2025. Contact us today to check availability and receive our exclusive wedding collection guide.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-16"
        >
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary px-20 py-7 text-[10px] tracking-[0.6em] font-bold uppercase transition-all duration-700 hover:bg-secondary hover:text-white shadow-xl hover:shadow-secondary/20"
          >
            Get In Touch
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
