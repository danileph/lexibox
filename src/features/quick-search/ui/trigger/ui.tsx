import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Key } from "@/shared/ui/key";

interface ITriggerProps extends React.HTMLAttributes<HTMLElement> {}

const styles = /* @tw */ {
  root: {
    base: "bg-lighter p-input-md px-5 text-start rounded-full border text-sm flex justify-between text-gray",
  },
};
export const Trigger: FC<ITriggerProps> = ({ className, ...props }) => {
  return (
    <button className={twMerge(styles.root.base, className)} {...props}>
      <span>Quick search...</span>
      <span className={"space-x-1"}>
        <Key>⌘</Key>
        <Key>K</Key>
      </span>
    </button>
  );
};
