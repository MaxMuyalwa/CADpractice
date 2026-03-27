import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-neu-green/50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: 
          "bg-matrix-green text-black font-black shadow-[0_0_20px_var(--matrix-glow)] hover:bg-[#0aed00] hover:shadow-[0_0_30px_var(--matrix-glow-intense)] hover:-translate-y-0.5 active:scale-[0.98]",
        destructive:
          "bg-destructive text-white shadow-[4px_4px_8px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)] hover:bg-destructive/90",
        outline:
          "bg-background/80 backdrop-blur-md text-neu-text-primary border border-neu-shadow-dark/10 shadow-[6px_6px_12px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)] hover:shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]",
        secondary:
          "bg-background/80 backdrop-blur-md text-neu-text-secondary shadow-[4px_4px_8px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)] hover:shadow-inner",
        ghost:
          "text-neu-text-secondary hover:text-neu-text-primary hover:bg-neu-shadow-dark/5",
        link: "text-neu-green underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 rounded-xl px-4 text-xs",
        lg: "h-14 rounded-2xl px-10 text-base",
        icon: "size-12 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
