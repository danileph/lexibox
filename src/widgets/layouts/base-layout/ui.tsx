import { FC } from "react";
import { Sidebar } from "@/widgets/sidebar";
import { Wrapper } from "@/widgets/wrapper";

interface IBaseLayoutProps extends React.HTMLAttributes<HTMLElement> {}

export const BaseLayout: FC<IBaseLayoutProps> = ({ children }) => {
  return (
    <div className={"flex"}>
      <Sidebar />
      <main className="grow min-h-screen pl-[340px] pr-10 py-14">
        <Wrapper>{children}</Wrapper>
      </main>
    </div>
  );
};
