"use client";

import Image from "next/image";

interface ProcessStepImageProps {
  src: string;
  alt: string;
}

export function ProcessStepImage({ src, alt }: ProcessStepImageProps) {
  return (
    <div className="relative aspect-[3/4] md:aspect-square">
      <Image src={src} alt={alt} fill className="object-cover object-center" />
    </div>
  );
}

interface ProcessStepContentProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export function ProcessStepContent({ number, title, description, className }: ProcessStepContentProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-6 bg-white ${className}`}>
      <span className="text-5xl font-serif text-secondary/40">{number}</span>
      <div className="h-[1px] w-12 bg-secondary/30" />
      <span className="text-[10px] tracking-[0.4em] uppercase font-bold">{title}</span>
      <p className="text-sm text-primary/40 leading-relaxed font-light">{description}</p>
    </div>
  );
}
