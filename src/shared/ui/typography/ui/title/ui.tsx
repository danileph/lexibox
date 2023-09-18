import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { className } from "postcss-selector-parser";
interface ITitleProps extends React.HTMLAttributes<HTMLElement> {
  level?: 1 | 2 | 3;
}

const styles = /* @tw */ {
  root: {
    base: "font-medium my-6",
    level: {
      1: "text-4xl",
      2: "text-3xl",
      3: "text-2xl",
    },
  },
};

export const Title: FC<ITitleProps> = ({ level = 1, className, ...other }) => {
  let Node: FC<Omit<ITitleProps, "level">>;

  switch (level) {
    case 1:
      Node = (props) => <h1 {...props} />;
      break;
    case 2:
      Node = (props) => <h2 {...props} />;
      break;
    case 3:
      Node = (props) => <h3 {...props} />;
      break;
  }

  return (
    <Node
      className={twMerge(styles.root.base, styles.root.level[level], className)}
      {...other}
    />
  );
};
