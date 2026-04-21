"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Plus } from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Part 1: Hero Banner & Title
export function ServiceHero() {
  return (
    <div className="w-full">
      <div className="relative w-full aspect-[21/9] min-h-[400px]">
        <Image
          src="/service/Rectangle 511.svg"
          alt="Services Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
      <Section className="bg-white pt-24 pb-16">
        <Container className="text-center space-y-4">
          <span className="text-[12px] tracking-[0.4em] uppercase text-secondary/80 font-medium">Services</span>
          <Typography variant="h1" className="text-5xl md:text-7xl serif-italic font-light tracking-tight text-primary/80">
            PHOTOGRAPHY PACKAGES
          </Typography>
        </Container>
      </Section>
    </div>
  );
}

// Part 2: Three Column Packages
const packages = [
  {
    title: "Wedding",
    image: "/service/Rectangle 443.svg",
    price: "799",
    features: ["500+ High-Quality Photos", "6 Hours HD Footage", "*Additional Photographer subject to charge", "*Videographer subject to charge"]
  },
  {
    title: "Portrait",
    image: "/service/Rectangle 447.svg",
    price: "399",
    features: ["Atleast 10 High Quality Photos", "Professionally Edited", "Hourly rates applied", "*Videographer subject to charge"]
  },
  {
    title: "Engagement",
    image: "/service/Rectangle 452.svg",
    price: "799",
    features: ["200 High-Quality Photos", "3 Hours HD Footage", "*Additional Photographer subject to charge", "*Videographer subject to charge"]
  }
];

export function ServicePackages() {
  return (
    <Section className="bg-white pb-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-8"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
              </div>
              <div className="space-y-6 flex flex-col items-center">
                <Typography variant="h2" className="text-5xl serif-italic font-light">{pkg.title}</Typography>
                <ul className="space-y-4 text-sm text-primary/60 font-light max-w-[250px]">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="border-b border-black/5 pb-2 last:border-0">{feature}</li>
                  ))}
                </ul>
                <div className="pt-4 flex flex-col items-center">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-secondary font-bold mb-2">PER SESSION</span>
                  <span className="text-4xl font-serif text-primary/80">${pkg.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <Link href="/contact" className="px-12 py-4 border border-secondary/30 text-[10px] tracking-[0.4em] uppercase font-bold text-primary/80 hover:bg-secondary/5 transition-colors">
            GET IN TOUCH
          </Link>
        </div>
      </Container>
    </Section>
  );
}

// Part 3: Branch Icon & Quote Banner
export function ServiceQuoteBanner() {
  return (
    <Section className="bg-[#FAF9F6] py-32">
      <Container className="max-w-4xl text-center space-y-12">
          <div className="relative w-16 h-16 mx-auto mb-8 opacity-60">
            <Image src="/service/Author Bio Photo.svg" alt="Icon" fill className="object-contain" />
          </div>
          <Typography variant="h2" className="text-4xl md:text-5xl serif-italic font-light leading-snug text-primary/70">
            Celebrate your love with stunning images that <br /> will be cherished for a lifetime
          </Typography>
      </Container>
    </Section>
  );
}

// Part 4: Process Title
export function ServiceProcessTitle() {
  return (
    <Section className="bg-white pt-32 pb-16">
        <Container className="text-center space-y-4">
          <span className="text-[12px] tracking-[0.4em] uppercase text-secondary/80 font-medium">PROCESS</span>
          <Typography variant="h2" className="text-5xl md:text-7xl serif-italic font-light tracking-tight text-primary/80">
            What to Expect
          </Typography>
        </Container>
    </Section>
  );
}

// Part 5: Staggered Process Grid - Improved to avoid image cutting
export function ServiceProcessSteps() {
  return (
    <Section className="bg-white pb-40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
          {/* Row 1 */}
          <div className="relative aspect-[3/4] md:aspect-square">
            <Image src="/service/Rectangle 442.svg" alt="Step 1" fill className="object-cover object-center" />
          </div>
          <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-6 bg-white border-y md:border-y-0 md:border-b border-black/5">
            <span className="text-5xl font-serif text-secondary/40">1</span>
            <div className="h-[1px] w-12 bg-secondary/30" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold">BREAKING THE ICE</span>
            <p className="text-sm text-primary/40 leading-relaxed font-light">Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam.</p>
          </div>
          <div className="relative aspect-[3/4] md:aspect-square">
            <Image src="/service/Rectangle 443.svg" alt="Detail" fill className="object-cover object-center" />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-6 bg-white order-last md:order-none">
            <span className="text-5xl font-serif text-secondary/40">2</span>
            <div className="h-[1px] w-12 bg-secondary/30" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold">PLANNING & PREPARATION</span>
            <p className="text-sm text-primary/40 leading-relaxed font-light">Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra</p>
          </div>
          <div className="relative aspect-[3/4] md:aspect-square">
            <Image src="/service/Rectangle 447.svg" alt="Portrait" fill className="object-cover object-center" />
          </div>
          <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-6 bg-white">
            <span className="text-5xl font-serif text-secondary/40">3</span>
            <div className="h-[1px] w-12 bg-secondary/30" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold">SESSION COVERAGE</span>
            <p className="text-sm text-primary/40 leading-relaxed font-light">Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra</p>
          </div>

          {/* Row 3 */}
          <div className="relative aspect-[3/4] md:aspect-square">
            <Image src="/service/Rectangle 452.svg" alt="Venues" fill className="object-cover object-center" />
          </div>
          <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-6 bg-white border-y md:border-y-0 md:border-t border-black/5">
            <span className="text-5xl font-serif text-secondary/40">4</span>
            <div className="h-[1px] w-12 bg-secondary/30" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold">POST-PRODUCTION & DELIVERY</span>
            <p className="text-sm text-primary/40 leading-relaxed font-light">Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.</p>
          </div>
          <div className="relative aspect-[3/4] md:aspect-square">
            <Image src="/service/Rectangle 511.svg" alt="Wedding" fill className="object-cover object-center" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Part 6: FAQ Section
const faqs = [
  "WHAT IS YOUR PHOTOGRAPHY STYLE?",
  "HOW FAR IN ADVANCE CAN SHOULD WE BOOK YOUR SERVICES?",
  "DO YOU REQUIRE A DEPOSIT, AND WHAT ARE YOUR PAYMENT TERMS?",
  "CAN WE CUSTOMIZE A PHOTOGRAPHY PACKAGE TO FIT YOUR NEEDS?",
  "HOW SOON AFTER THE EVENT WILL I RECEIVE YOUR PHOTOS?"
];

export function ServiceFAQ() {
  return (
    <Section className="bg-[#FAF9F6] py-32">
      <Container className="max-w-4xl">
        <div className="text-center space-y-4 mb-20">
          <span className="text-[12px] tracking-[0.4em] uppercase text-secondary/80 font-medium">FAQ</span>
          <Typography variant="h2" className="text-5xl md:text-7xl serif-italic font-light text-primary/80">Any Queries?</Typography>
        </div>
        <div className="space-y-0">
          {faqs.map((q, idx) => (
            <div key={idx} className="flex items-center gap-8 py-8 border-b border-black/5 group cursor-pointer">
              <Plus className="w-5 h-5 text-secondary/60 group-hover:rotate-90 transition-transform duration-500" />
              <span className="text-[11px] tracking-[0.3em] font-bold uppercase text-primary/70">{q}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Part 7: Quality Service Section
export function ServiceQuality() {
  return (
    <Section className="bg-white py-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <Image src="/service/Rectangle 451.svg" alt="Quality" fill className="object-cover" />
            </div>
            <div className="space-y-12">
                <div className="space-y-6">
                    <Typography variant="h2" className="text-6xl serif-italic font-light text-primary/80">Quality Service</Typography>
                    <Typography variant="p" className="text-lg text-primary/50 font-light leading-relaxed max-w-md">
                        On your big day, you can count on me to turn fleeting moments into timeless treasures you will cherish for generations.
                    </Typography>
                </div>
                <Link href="/contact" className="inline-block px-12 py-5 bg-[#EAE3D9] text-[10px] tracking-[0.4em] uppercase font-bold text-primary/80 hover:bg-secondary/10 transition-colors">
                    Enquire Now
                </Link>
                <div className="relative aspect-[16/9] w-full mt-12">
                     <Image src="/service/Rectangle 452.svg" alt="Rings" fill className="object-cover" />
                </div>
            </div>
        </div>
      </Container>
    </Section>
  );
}

export default function ServicesPageContent() {
  return (
    <div className="bg-white">
      <ServiceHero />
      <ServicePackages />
      <ServiceQuoteBanner />
      <ServiceProcessTitle />
      <ServiceProcessSteps />
      <ServiceFAQ />
      <ServiceQuality />
    </div>
  );
}
