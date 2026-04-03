import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Instagram, Facebook, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-32 md:py-48">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 md:gap-12">
          
          {/* Brand - Span 5 */}
          <div className="md:col-span-5 space-y-12">
            <Typography variant="h3" className="text-4xl serif-italic tracking-[0.2em] leading-none uppercase">
              LUXE<span className="not-italic font-light text-secondary">STUDIO</span>
            </Typography>
            <Typography variant="p" className="text-gray-400 max-w-sm text-lg font-light leading-relaxed">
              Capturing the essence of love through timeless imagery and authentic visual narratives since 2014.
            </Typography>
            <div className="flex space-x-8 pt-4">
              <Link href="#" className="text-white hover:text-secondary transition-colors duration-500">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-secondary transition-colors duration-500">
                <Facebook size={20} />
              </Link>
              <Link href="mailto:contact@luxestudio.com" className="text-white hover:text-secondary transition-colors duration-500">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Links 1 - Span 2 */}
          <div className="md:col-span-2 space-y-10 pt-4">
            <span className="luxury-label">Navigation</span>
            <nav className="flex flex-col space-y-6">
              {["Home", "About", "Portfolio", "Services", "Blog"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="text-xs tracking-[0.3em] font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group uppercase">
                  {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Links 2 - Span 2 */}
          <div className="md:col-span-2 space-y-10 pt-4">
            <span className="luxury-label">Legal</span>
            <nav className="flex flex-col space-y-6">
              {["Privacy", "Terms", "Cookies", "FAQ"].map((item) => (
                <Link key={item} href="#" className="text-xs tracking-[0.3em] font-medium text-gray-300 hover:text-white transition-all duration-300 uppercase">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter - Span 3 */}
          <div className="md:col-span-3 space-y-10 pt-4">
            <span className="luxury-label">Newsletter</span>
            <div className="space-y-6">
              <Typography variant="p" className="text-xs text-gray-400 leading-relaxed tracking-wider">
                Receive inspiration and exclusive tips for your special day.
              </Typography>
              <div className="relative pt-2">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-xs tracking-widest focus:outline-none focus:border-secondary transition-colors"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.2em] uppercase font-bold text-secondary hover:text-white transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] tracking-[0.3em] text-gray-500 uppercase font-medium">
            &copy; {new Date().getFullYear()} LUXE STUDIO. CREATED WITH VISION.
          </p>
          <div className="flex gap-12">
            <Link href="#" className="text-[9px] tracking-[0.3em] text-gray-500 uppercase hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="text-[9px] tracking-[0.3em] text-gray-500 uppercase hover:text-white transition-colors">Pinterest</Link>
            <Link href="#" className="text-[9px] tracking-[0.3em] text-gray-500 uppercase hover:text-white transition-colors">WhatsApp</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
