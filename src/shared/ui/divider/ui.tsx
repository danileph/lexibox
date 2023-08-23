import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IDividerProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  children?: string;
  variant?: "primary" | "secondary";
}

const styles = /* @tw */ {
  root: {
    base: "flex space-x-2 justify-between items-center my-4",
  },
  hr: {
    base: "grow border-b-2 border-t-0",
    variants: {
      primary: "border-b-darkest",
      secondary: "border-b-gray",
    },
  },
  text: {
    base: "uppercase font-semibold",
    variants: {
      primary: "text-darkest",
      secondary: "text-gray",
    },
  },
};

export const Divider: FC<IDividerProps> = ({
  children,
  variant = "primary",
  ...other
}) => {
  let Node: FC<IDividerProps>;
  if (children) {
    Node = ({ className: _className, ..._other }) => (
      <div className={twMerge(styles.root.base, _className)} {..._other}>
        <hr className={twMerge(styles.hr.base, styles.hr.variants[variant])} />
        <span
          className={twMerge(styles.text.base, styles.text.variants[variant])}
        >
          {children}
        </span>
        <hr className={twMerge(styles.hr.base, styles.hr.variants[variant])} />
      </div>
    );
  } else {
    Node = ({ className: _className, ..._other }) => (
      <hr
        className={twMerge(
          styles.hr.base,
          styles.hr.variants[variant],
          _className,
        )}
        {..._other}
      />
    );
  }

  return <Node {...other} />;
};
