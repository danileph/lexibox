import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IKeyProps extends React.HTMLAttributes<HTMLElement> {}

const styles = /* @tw */ {
  root: {
    base: "inline-flex items-center justify-center w-[20px] h-[20px] border rounded ",
  },
  symbol: {
    base: "block text-xs leading-none",
  },
};

export const Key: FC<IKeyProps> = ({ className, children, ...props }) => {
  return (
    <span className={twMerge(styles.root.base, className)} {...props}>
      <span className={twMerge(styles.symbol.base)}>{children}</span>
    </span>
  );
};
