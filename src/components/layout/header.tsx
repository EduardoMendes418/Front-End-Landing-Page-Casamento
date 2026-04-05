"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "SERVICES", href: "/services" },
  { name: "CONTACT", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-1000 ease-in-out ${
        scrolled ? "bg-white/95 backdrop-blur-xl py-5" : "bg-transparent py-10"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex lg:flex-1"
          >
            <Link href="/" className={`font-serif text-2xl tracking-[0.6em] transition-colors duration-700 ${scrolled ? "text-primary" : "text-white"}`}>
              LUXE<span className="serif-italic text-secondary">STUDIO</span>
            </Link>
          </motion.div>
          
          <nav className="hidden lg:flex lg:gap-x-14">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`luxury-underline text-[9px] font-bold tracking-[0.5em] transition-all duration-700 ${
                    scrolled ? "text-primary/70" : "text-white/90"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex lg:flex-1 lg:justify-end"
          >
            <Button asChild variant="default" size="sm" className={`rounded-none px-12 h-12 text-[9px] tracking-[0.5em] font-bold transition-all duration-1000 ${
              scrolled ? "bg-primary text-white" : "bg-white text-primary"
            }`}>
              <Link href="/contact">BOOK A DATE</Link>
            </Button>
          </motion.div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={scrolled ? "text-primary" : "text-white"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-white"
        >
          <div className="flex flex-col space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-bold tracking-[0.4em] text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="rounded-none w-full h-12 text-[10px] tracking-[0.4em] font-bold">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>GET IN TOUCH</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
