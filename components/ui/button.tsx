import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5400] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#d90429] text-white shadow-[0_0_28px_rgba(217,4,41,0.25)] hover:-translate-y-0.5 hover:bg-[#ff1238] hover:shadow-[0_0_42px_rgba(217,4,41,0.45)]",
        outline:
          "border border-white/20 bg-white/5 text-white backdrop-blur hover:-translate-y-0.5 hover:border-[#ff5400]/70 hover:bg-[#ff5400]/10",
        ghost: "text-white/80 hover:bg-white/10 hover:text-white"
      },
      size: {
        default: "h-12 px-5",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-7"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
