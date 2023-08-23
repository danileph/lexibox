"use client";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

const styles = /* @tw */ {
  base: "border-darkest border-2 rounded-[8px] px-4 py-2 shadow-csm uppercase select-none text-sm font-semibold tracking-widest hover:backdrop-brightness-95 translate-y-[-3px] active:translate-y-[0px] active:shadow-none focus-visible:backdrop-brightness-95 focus:outline-none ",
  variants: {
    primary: "bg-primary hover:brightness-110",
    secondary: "",
  },
  sizes: {
    small:
      "py-1.5 px-3 text-xs rounded-[7px] shadow-csm-sm active:translate-y-[2px]",
    medium: "",
    large:
      "py-2.5 px-6 rounded-[9px] text-md shadow-csm-lg translate-y-[-4px]  active:translate-y-[0px]",
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
