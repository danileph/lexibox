import { FC } from "react";
import LinkNext from "next/link";
import { twMerge } from "tailwind-merge";

interface ILinkProps extends React.ComponentProps<typeof LinkNext> {
  underline?: boolean;
  variant?: "primary" | "secondary";
}

const styles = /* @tw */ {
  root: {
    base: "hover:text-secondary hover:border-b-secondary inline-block border-b leading-none",
    variant: {
      primary: "border-b-darkest",
      secondary: "border-b-gray text-gray",
    },
  },
};

export const Link: FC<ILinkProps> = ({
  underline = false,
  variant = "primary",
  className,
  ...other
}) => {
  return (
    <LinkNext
      className={twMerge(
        styles.root.base,
        styles.root.variant[variant],
        className,
      )}
      {...other}
    />
  );
};
