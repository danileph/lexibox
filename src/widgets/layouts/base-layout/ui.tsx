import { FC } from "react";
import { Sidebar } from "@/widgets/sidebar";

interface IBaseLayoutProps extends React.HTMLAttributes<HTMLElement> {}

export const BaseLayout: FC<IBaseLayoutProps> = ({ children }) => {
  return (
    <div className={"flex"}>
      <Sidebar />
      <main className="grow min-h-screen p-4">{children}</main>
    </div>
  );
};
