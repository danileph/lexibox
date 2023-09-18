import { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ILogoProps extends React.HTMLAttributes<HTMLElement> {}

export const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <div
      className={twMerge("flex items-center w-full justify-center", className)}
    >
      <Image
        src={"/images/logo/logo-large.svg"}
        alt={"logo"}
        width={175}
        height={175}
      />
    </div>
  );
};
