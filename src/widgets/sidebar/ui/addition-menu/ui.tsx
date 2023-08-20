import { FC } from "react";
import { menu } from "./config";

interface IAdditionMenuProps extends React.HTMLAttributes<HTMLElement> {}

export const AdditionMenu: FC<IAdditionMenuProps> = () => {
  return (
    <nav>
      <ul className={"space-y-2 text-sm"}>
        {menu.map((item) => (
          <li key={item.url}>{item.name}</li>
        ))}
      </ul>
    </nav>
  );
};
