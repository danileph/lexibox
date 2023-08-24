"use client";
import { FC } from "react";
import { menu } from "./config";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface IMenuProps extends React.HTMLAttributes<HTMLElement> {}

export const Menu: FC<IMenuProps> = () => {
  // const current = "/searching";
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {menu.map((item) => (
          <li key={item.name} className={"mb-4 last:mb-0"}>
            <Link
              href={item.url}
              className={twMerge(
                "py-2.5 px-8 text-lg font-semibold hover:bg-hover rounded-xl cursor-pointer select-none flex space-x-4",
                pathname === item.url &&
                  "bg-primary border-darkest border-[2px] hover:bg-primary",
              )}
            >
              {item.icon && (
                <Image src={item.icon} alt={""} width={20} height={20} />
              )}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
