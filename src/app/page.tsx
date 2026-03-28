import { Hero } from "@/features/home/Hero";
import { AboutSection } from "@/features/home/AboutSection";
import { PortfolioSection } from "@/features/home/PortfolioSection";
import { ServicesSection } from "@/features/home/ServicesSection";
import { TestimonialsSection } from "@/features/home/TestimonialsSection";
import { ContactSection } from "@/features/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
