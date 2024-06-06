import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-md font-bold tracking-wider ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-paupink text-white sm:hover:bg-paubeige sm:hover:border sm:hover:border-paulightpink sm:hover:text-paulightpink",
        destructive:
          "bg-destructive text-destructive-foreground sm:hover:bg-destructive/90",
        outline:
          "border border-paulightpink text-paulightpink bg-paubeige sm:hover:bg-paulightpink sm:hover:text-paubeige",
        secondary:
          "bg-paulightpink text-paubeige sm:hover:text-paulightpink sm:hover:bg-paubeige sm:hover:border border-paulightpink",
        ghost: "text-paubrown sm:hover:bg-accent sm:hover:text-accent-foreground",
        link: "text-paulightpink underline-paulightpink sm:hover:underline",
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
