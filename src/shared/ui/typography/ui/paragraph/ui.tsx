import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IParagraphProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "primary" | "secondary";
}

const styles = /* @tw */ {
  root: {
    base: "my-4",
    variant: {
      primary: "",
      secondary: "text-gray font-normal",
    },
  },
};

export const Paragraph: FC<IParagraphProps> = ({
  variant = "primary",
  className,
  ...other
}) => {
  return (
    <p
      className={twMerge(
        styles.root.base,
        styles.root.variant[variant],
        className,
      )}
      {...other}
    />
  );
};
