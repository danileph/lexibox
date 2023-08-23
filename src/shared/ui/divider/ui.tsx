import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IDividerProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  children?: string;
}

const styles = /* @tw */ {
  hr: {
    base: "grow border-b-2 border-gray",
  },
  text: {
    base: "uppercase font-semibold text-gray",
  },
};

export const Divider: FC<IDividerProps> = ({ children, ...other }) => {
  let Node: FC<IDividerProps>;
  if (children) {
    Node = ({ className: _className, ..._other }) => (
      <div
        className={twMerge(
          "flex space-x-2 justify-between items-center",
          _className,
        )}
        {..._other}
      >
        <hr className={twMerge(styles.hr.base)} />
        <span className={twMerge(styles.text.base)}>{children}</span>
        <hr className={twMerge(styles.hr.base)} />
      </div>
    );
  } else {
    Node = ({ className: _className, ..._other }) => (
      <hr className={twMerge(styles.hr.base, _className)} {..._other} />
    );
  }

  return <Node {...other} />;
};
