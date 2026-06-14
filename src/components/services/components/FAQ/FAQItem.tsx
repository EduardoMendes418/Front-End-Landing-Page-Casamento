"use client";

import { Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
}

export function FAQItem({ question }: FAQItemProps) {
  return (
    <div className="flex items-center gap-8 py-8 border-b border-black/5 group cursor-pointer">
      <Plus className="w-5 h-5 text-secondary/60 group-hover:rotate-90 transition-transform duration-500" />
      <span className="text-[11px] tracking-[0.3em] font-bold uppercase text-primary/70">{question}</span>
    </div>
  );
}
