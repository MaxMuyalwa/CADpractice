import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#08CB00]/50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: 
          "bg-[#08CB00] text-black font-black shadow-[0_0_20px_rgba(8,203,0,0.3)] hover:bg-[#0aed00] hover:shadow-[0_0_30px_rgba(8,203,0,0.6)] hover:-translate-y-0.5 active:scale-[0.98]",
        destructive:
          "bg-red-600 text-white shadow-md hover:bg-red-700",
        outline:
          "bg-[#E5E5E5] dark:bg-[#000805] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-800 shadow-md hover:shadow-inner",
        secondary:
          "bg-[#E5E5E5] dark:bg-[#000805] text-gray-600 dark:text-gray-400 shadow-md hover:shadow-inner",
        ghost:
          "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800",
        link: "text-[#08CB00] underline-offset-4 hover:underline",
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
