import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IParagraphProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "extra-small";
}

const styles = /* @tw */ {
  root: {
    base: "my-[0.8em]",
    variant: {
      primary: "",
      secondary: "text-gray font-normal",
    },
    size: {
      "extra-small": "text-xs",
      small: "text-sm",
      medium: "",
    },
  },
};

export const Paragraph: FC<IParagraphProps> = ({
  variant = "primary",
  className,
  size = "medium",
  ...other
}) => {
  return (
    <p
      className={twMerge(
        styles.root.base,
        styles.root.variant[variant],
        styles.root.size[size],
        className,
      )}
      {...other}
    />
  );
};
