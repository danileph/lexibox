"use client";
import { FC } from "react";
import { menu } from "./config";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { theme } from "@/shared/consts";

interface IMenuProps extends React.HTMLAttributes<HTMLElement> {}

export const Menu: FC<IMenuProps> = () => {
  // const current = "/searching";
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {menu.map((item) => (
          <li key={item.name} className={"mb-3 last:mb-0"}>
            <Link
              href={item.url}
              className={`
                ${"p-input-lg h-input-lg uppercase text-button-lg font-medium rounded-xl cursor-pointer select-none flex items-center space-x-3 tracking-widest"}
                ${
                  pathname === item.url &&
                  // "bg-primary border-darkest border-[2px] hover:bg-primary -mx-[2px]"
                  "text-primary-dark"
                }
              `}
            >
              {item?.renderIcon &&
                item?.renderIcon({
                  color:
                    pathname === item.url && theme?.colors
                      ? theme?.colors["primary-dark"]
                      : theme?.colors?.darkest,
                })}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
