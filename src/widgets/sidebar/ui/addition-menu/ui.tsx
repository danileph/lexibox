import { FC } from "react";
import { menu } from "./config";
import { Typography } from "@/shared/ui/typography";

interface IAdditionMenuProps extends React.HTMLAttributes<HTMLElement> {}

export const AdditionMenu: FC<IAdditionMenuProps> = () => {
  return (
    <nav>
      <ul className={"space-y-2 text-sm font-bold"}>
        {menu.map((item) => (
          <li key={item.url}>
            <Typography.Link href={item.url}>{item.name}</Typography.Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
