"use client";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

const styles = {
  base: "border-darkest border-2 rounded-[8px] px-4 py-2 shadow-csm uppercase select-none text-sm font-semibold tracking-widest hover:backdrop-brightness-95 active:translate-y-[3px] active:shadow-none",
  variants: {
    primary: "bg-primary hover:brightness-110",
    secondary: "",
  },
  sizes: {
    small:
      "py-1.5 px-3 text-xs rounded-[7px] shadow-csm-sm border-[2px] active:translate-y-[2px]",
    medium: "",
    large:
      "py-2.5 px-6 rounded-[9px] text-md shadow-csm-lg active:translate-y-[4px] border-[2.5px]",
  },
};

export const Button: FC<IButtonProps> = ({
  variant = "secondary",
  size = "medium",
  className,
  ...other
}) => {
  return (
    <button
      className={twMerge(
        styles.base,
        styles.variants[variant],
        styles.sizes[size],
        className,
      )}
      {...other}
    ></button>
  );
};
