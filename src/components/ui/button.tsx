import * as React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

export function Button({ variant = "solid", className, children, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-300";
  const styles = {
    solid: "bg-emerald-700 text-white hover:bg-emerald-800",
    outline: "border border-emerald-700 text-emerald-800 hover:bg-emerald-50",
    ghost: "text-emerald-800 hover:bg-emerald-50",
  } as const;

  return (
    <button className={clsx(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
