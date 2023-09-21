import { FC } from "react";
import { Input } from "@/shared/ui/input";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/shared/ui/typography";

interface ISearchProps extends React.HTMLAttributes<HTMLElement> {}

const styles = /* @tw */ {
  root: {
    base: "p-4 bg-light !max-w-[500px] w-full rounded-full",
  },
  input: {
    base: "h-[60px] px-6 !rounded-full bg-white hover:brightness-95 focus:brightness-95 text-base placeholder:text-base",
  },
};

export const Search: FC<ISearchProps> = ({ className, ...props }) => {
  return (
    <div className={twMerge(styles.root.base, className)}>
      <Input
        className={styles.input.base}
        placeholder={"Search for a word, idiom or phrasal verb..."}
        fullWidth
      />
    </div>
  );
};
