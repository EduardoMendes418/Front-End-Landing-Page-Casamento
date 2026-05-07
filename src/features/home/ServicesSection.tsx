"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ServiceHeader } from "./components/Services/ServiceHeader";
import { ServiceCard } from "./components/Services/ServiceCard";
import { FeaturedService } from "./components/Services/FeaturedService";
import { InvestmentHeader } from "./components/Services/InvestmentHeader";
import { PackageCard } from "./components/Services/PackageCard";
import { fadeUp, containerVariants } from "@/lib/animations";

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

export function ServicesSection() {
  return (
    <Section className="bg-white py-40 md:py-64">
      <Container className="space-y-40 lg:space-y-64">
        
        {/* Services Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <ServiceHeader />

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-12">
            {services.slice(0, 2).map((service) => (
              <ServiceCard 
                key={service.id} 
                {...service} 
                variants={fadeUp} 
              />
            ))}
          </div>
        </div>

        {/* Full Width Service Item */}
        <FeaturedService {...services[2]} />

        {/* Investment Section */}
        <div className="space-y-32">
          <InvestmentHeader />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-black/5"
          >
            {packages.map((pkg, index) => (
              <PackageCard 
                key={pkg.name} 
                {...pkg} 
                index={index} 
                variants={fadeUp} 
              />
            ))}
          </motion.div>
        </div>

      </Container>
    </Section>
  );
}
