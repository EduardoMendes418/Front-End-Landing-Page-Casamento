"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background with zoom reveal */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/Hero Image.svg"
          alt="Wedding Moments"
          fill
          className="object-cover object-[center_20%]"
          priority
        />
        <div className="absolute inset-0 border-white" />
      </motion.div>
      
      {/* Editorial Content Overlay */}
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <span className="luxury-label">Capturing the Moments</span>
            <div className="mt-4 h-[1px] w-12 bg-secondary/40 mx-auto" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <h1 className="text-huge serif-italic text-primary leading-[0.8] select-none text-white drop-shadow-[0_2px_40px_rgba(0,0,0,0.1)]">
              Memories <br />
              <span className="not-italic font-light tracking-[-0.05em] block -mt-4 lg:-mt-8">Forever</span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute -top-12 -right-20 hidden xl:block"
            >
              <span className="vertical-text text-[9px] tracking-[1em] uppercase text-white font-bold opacity-80">
                ESTABLISHED 2014
              </span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-20 space-y-12"
          >
            <div className="flex flex-col sm:flex-row gap-20 justify-center items-center">
              <Link 
                href="/portfolio" 
                className="luxury-underline text-[10px] tracking-[0.6em] font-bold text-white uppercase"
              >
                Explorar Portfólio
              </Link>
              <Link 
                href="/contact" 
                className="luxury-underline text-[10px] tracking-[0.6em] font-bold text-white uppercase"
              >
                Fale Conosco
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 100 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-t from-white to-transparent" 
      />
    </section>
  );
}
