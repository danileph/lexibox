import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: FC<IButtonProps> = ({
  variant = "secondary",
  className,
  ...other
}) => {
  return (
    <button
      className={twMerge("bg-primary border-darkest border-2 rounded-2xl")}
      {...other}
    ></button>
  );
};
