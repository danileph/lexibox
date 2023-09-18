import { FC } from "react";
import { menu } from "./config";
import { Typography } from "@/shared/ui/typography";
import { twMerge } from "tailwind-merge";

interface IAdditionMenuProps extends React.HTMLAttributes<HTMLElement> {}

export const AdditionMenu: FC<IAdditionMenuProps> = ({
  className,
  ...props
}) => {
  return (
    <nav {...props} className={className}>
      <ul className={"space-y-2 text-input-sm font-medium"}>
        {menu.map((item) => (
          <li key={item.url}>
            <Typography.Link href={item.url}>{item.name}</Typography.Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
