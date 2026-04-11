import * as React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "p" | "lead" | "small" | "muted";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  component?: React.ElementType;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "p", component, ...props }, ref) => {
    const Comp = component || (variant === "p" || variant === "lead" || variant === "muted" || variant === "small" ? "p" : variant);

    return (
      <Comp
        ref={ref}
        className={cn(
          {
            "scroll-m-20 text-5xl font-light tracking-tighter lg:text-7xl font-serif leading-[0.9]":
              variant === "h1",
            "scroll-m-20 text-4xl font-light tracking-tighter lg:text-6xl font-serif leading-[0.9]":
              variant === "h2",
            "scroll-m-20 text-3xl font-light tracking-tight lg:text-5xl font-serif leading-tight":
              variant === "h3",
            "scroll-m-20 text-xl font-light tracking-wide font-serif":
              variant === "h4",
            "leading-relaxed font-light": variant === "p",
            "text-2xl font-light text-muted-foreground leading-relaxed": variant === "lead",
            "text-[10px] font-bold tracking-[0.4em] uppercase": variant === "small",
            "text-sm text-muted-foreground/60 font-light": variant === "muted",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Typography.displayName = "Typography";
