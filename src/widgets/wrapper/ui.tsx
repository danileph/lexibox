import { FC } from "react";
import { Typography } from "@/shared/ui/typography";
import { twMerge } from "tailwind-merge";

interface IWrapperProps extends React.HTMLAttributes<HTMLElement> {}

const styles = /* @tw */ {
  root: {
    base: "max-w-[1000px] mx-auto",
  },
};

export const Wrapper: FC<IWrapperProps> = ({ className, ...other }) => {
  return <div className={twMerge(styles.root.base, className)} {...other} />;
};
