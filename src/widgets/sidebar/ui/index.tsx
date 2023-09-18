import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Menu } from "./menu";
import { Logo } from "./logo";
import { SocialMedia } from "./social-media";
import { AdditionMenu } from "@/widgets/sidebar/ui/addition-menu";

interface ISidebarProps extends React.HTMLAttributes<HTMLElement> {}

export const Sidebar: FC<ISidebarProps> = ({ className, ...other }) => {
  return (
    <aside
      className={`
        bg-light w-[260px] fixed h-screen border-r-2 border-r-black flex flex-col px-6 py-8
        ${className}
      `}
      {...other}
    >
      <Logo className={"mb-10 mt-4 -ml-0.5"} />
      <Menu />
      <div className={"grow"}></div>
      <SocialMedia className={"mb-6 ml-[16px]"} />
      <AdditionMenu className={"ml-[16px]"} />
    </aside>
  );
};
