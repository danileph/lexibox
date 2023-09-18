import { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ISocialMediaProps extends React.HTMLAttributes<HTMLElement> {}

export const SocialMedia: FC<ISocialMediaProps> = ({ className }) => {
  return (
    <div className={twMerge("flex space-x-3", className)}>
      <Image
        src={"/icons/social-media/telegram.svg"}
        alt={"telegram"}
        width={20}
        height={20}
      />
      <Image
        src={"/icons/social-media/vk.svg"}
        alt={"vk"}
        width={20}
        height={20}
      />
      <Image
        src={"/icons/social-media/discord.svg"}
        alt={"discord"}
        width={20}
        height={20}
      />
      <Image
        src={"/icons/social-media/facebook.svg"}
        alt={"facebook"}
        width={20}
        height={20}
      />
    </div>
  );
};
