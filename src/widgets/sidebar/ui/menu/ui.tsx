import { FC } from "react";
import { menu } from "./config";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface IMenuProps extends React.HTMLAttributes<HTMLElement> {}

export const Menu: FC<IMenuProps> = () => {
  const current = "/searching";

  return (
    <nav>
      <ul>
        {menu.map((item) => (
          <li
            key={item.name}
            className={twMerge(
              "py-2.5 px-8 text-lg font-semibold mb-4 last:mb-0 hover:bg-hover rounded-xl cursor-pointer select-none flex space-x-4",
              current === item.url &&
                "bg-primary border-darkest border-[2px] hover:bg-primary",
            )}
          >
            {item.icon && (
              <Image src={item.icon} alt={""} width={20} height={20} />
            )}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
