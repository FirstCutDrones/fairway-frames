import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-light shadow-glow hover:shadow-glow-strong transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-medium",
        outline:
          "border border-border bg-card/50 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:border-primary hover:text-primary hover:shadow-glow transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-muted shadow-soft hover:shadow-medium transition-all duration-300",
        ghost: "hover:bg-accent/20 hover:text-primary transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-light transition-colors",
        premium: "bg-gradient-glow text-background hover:shadow-glow-strong shadow-glow font-semibold transition-all duration-300 transform hover:scale-105",
        hero: "bg-gradient-premium text-background hover:shadow-glow-strong shadow-glow border border-primary/30 font-semibold transition-all duration-300 transform hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
