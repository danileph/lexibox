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
      className={twMerge(
        "bg-light w-[300px] h-screen border-r-[2.5px] border-r-black flex flex-col p-8",
        className
      )}
      {...other}
    >
      <Logo className={"mb-10 mt-4"} />
      <Menu />
      <div className={"grow"}></div>
      <SocialMedia className={"mb-6"} />
      <AdditionMenu />
    </aside>
  );
};
