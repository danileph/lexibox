"use client";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

const styles = /* @tw */ {
  base: "border-darkest border-2 shadow-csm uppercase select-none font-medium tracking-widest translate-y-[-3px] active:translate-y-[0px] active:shadow-none focus:outline-none ",
  variants: {
    primary: "bg-primary hover:brightness-110 focus-visible:brightness-110",
    secondary:
      "hover:backdrop-brightness-95 focus-visible:backdrop-brightness-95",
  },
  sizes: {
    small:
      "p-input-sm rounded-input-sm h-input-sm text-button-sm placeholder:text-input-sm",
    medium:
      "p-input-md rounded-input-md h-input-md text-button-md placeholder:text-input-md",
    large:
      "p-input-lg rounded-input-lg h-input-lg text-button-lg placeholder:text-input-lg",
  },
  fullWidth: "w-full",
};

export const Button: FC<IButtonProps> = ({
  variant = "secondary",
  size = "medium",
  className,
  fullWidth = false,
  ...other
}) => {
  return (
    <button
      className={`
         ${styles.base}
         ${styles.sizes[size]}
         ${styles.variants[variant]}
         ${fullWidth && styles.fullWidth}
         ${className}
      `}
      {...other}
    ></button>
  );
};
