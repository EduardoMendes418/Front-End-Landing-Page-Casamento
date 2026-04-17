"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { div } from "framer-motion/client";

const services = [
  {
    id: "01",
    name: "Wedding",
    subtitle: "Photography",
    image: "/Rectangle 424.svg",
    description: "Full day coverage capturing every intimate detail and grand moment of your celebration.",
  },
  {
    id: "02",
    name: "Engagement",
    subtitle: "Sessions",
    image: "/Rectangle 425.svg",
    description: "A relaxed session to celebrate your love story and get comfortable before the big day.",
  },
  {
    id: "03",
    name: "Destination",
    subtitle: "Weddings",
    image: "/Rectangle 427.svg",
    description: "Wherever your heart takes you, we'll be there to document your adventure abroad.",
  },
];

const packages = [
  {
    name: "Intimate",
    price: "4.800",
    description: "Perfect for intimate celebrations and micro-weddings.",
    features: ["6 Hours Coverage", "Online Gallery", "350 Edited Photos", "USB Keepsake Box"],
  },
  {
    name: "Classic",
    price: "7.200",
    description: "Our most popular collection for the full wedding experience.",
    features: ["10 Hours Coverage", "Pre-Wedding Session", "500 Edited Photos", "Luxury Album 30x30", "Second Photographer"],
    featured: true,
  },
  {
    name: "Destination",
    price: "Custom",
    description: "For love stories that know no boundaries.",
    features: ["2-Day Coverage", "Post-Wedding Session", "Complete Storytelling", "Lifetime Gallery", "Travel Inclusive"],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export function ServicesSection() {
  return (
    <Section className="bg-white py-40 md:py-64">
      <Container className="space-y-40 lg:space-y-64">
        
        {/* Services Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <span className="luxury-label">Our Expertise</span>
              <Typography variant="h2" className="text-4xl md:text-5xl serif-italic leading-[0.8] tracking-tighter">
                Services & <br />
                <span className="not-italic font-light tracking-[-0.05em]">Excellence</span>
              </Typography>
            </div>

            <div className="h-[1px] w-32 bg-secondary/30" />
            <Typography variant="p" className="text-xl text-primary/60 font-light max-w-md leading-relaxed">
              We specialize in documenting the raw emotions and timeless beauty of your unique story through an editorial lens.
            </Typography>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-12">
            {services.slice(0, 2).map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group space-y-8"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 flex flex-col items-center">
                    <span className="text-[10px] font-bold text-white/80 tracking-[0.4em] uppercase">{service.id}</span>
                    <div className="h-12 w-[1px] bg-white/30 mt-4" />
                  </div>
                </div>
                <div className="space-y-4">
                  <Typography variant="h3" className="text-4xl serif-italic">
                    {service.name} <span className="not-italic font-light opacity-50">{service.subtitle}</span>
                  </Typography>
                  <Typography variant="p" className="text-sm text-primary/40 leading-relaxed max-w-xs">
                    {service.description}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full Width Service Item */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-8 relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-muted group">
            <Image
              src={services[2].image}
              alt={services[2].name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-1000" />
          </div>
          <div className="lg:col-span-4 lg:pl-12 space-y-6">
            <span className="luxury-label">{services[2].id} &mdash; Travel</span>
            <Typography variant="h3" className="text-5xl serif-italic">
              {services[2].name} <br />
              <span className="not-italic font-light opacity-50">{services[2].subtitle}</span>
            </Typography>
            <Typography variant="p" className="text-base text-primary/50 leading-relaxed font-light">
              {services[2].description}
            </Typography>
          </div>
        </motion.div>

        {/* Investment Section */}
        <div className="space-y-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-10 max-w-3xl mx-auto"
          >
            <span className="luxury-label">The Investment</span>
            <Typography variant="h2" className="text-4xl md:text-5xl serif-italic tracking-tighter leading-none">
              Collections & <br />
              <span className="not-italic font-light tracking-[-0.05em]">Experience</span>
            </Typography>
            <div className="h-[1px] w-32 bg-secondary/30 mt-12" />
          </motion.div>


          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-black/5"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                variants={fadeUp}
                className={cn(
                  "group p-12 md:p-20 flex flex-col justify-between transition-all duration-1000 hover:bg-[#FAF9F6] relative",
                  index !== 2 && "md:border-r border-black/5"
                )}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-secondary shadow-sm" />
                )}
                
                <div className="space-y-16">
                  <div className="space-y-6">
                    <span className="text-[9px] tracking-[0.6em] font-bold uppercase text-secondary/50">Collection</span>
                    <Typography variant="h3" className="text-5xl serif-italic tracking-tight">{pkg.name}</Typography>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-bold text-primary/30 uppercase tracking-[0.4em]">Starting at</span>
                      <span className="text-5xl font-light tracking-tighter">R$ {pkg.price}</span>
                    </div>
                    <Typography variant="p" className="text-primary/50 text-sm font-light leading-relaxed min-h-[48px]">
                      {pkg.description}
                    </Typography>
                  </div>

                  <div className="h-[1px] w-12 bg-secondary/20" />

                  <ul className="space-y-6">
                    {pkg.features.map((feature) => (
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
            ))}
          </motion.div>
        </div>

      </Container>
    </Section>
  );
}
