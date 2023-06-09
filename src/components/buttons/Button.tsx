import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@src/utils/cn";
import { Spinner } from "@src/components/spinner/Spinner";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-50 dark:text-blue-900",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
      fill: {
        default: "something",
        sm: "w-full sm:w-fit",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fill: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fill, isLoading = false, ...props }, ref) => {
    return !isLoading ? (
      <button
        className={cn(buttonVariants({ variant, size, fill, className }))}
        ref={ref}
        {...props}
      />
    ) : (
      <Spinner
        className={`center-items align-center justify-center ${cn(
          buttonVariants({
            variant,
            size,
            fill,
            className,
          })
        )}`}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
