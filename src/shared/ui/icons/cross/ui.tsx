import { FC } from "react";
import { IconProps } from "@/shared/ui/icons/types";

type ICrossIconProps = React.HTMLAttributes<SVGElement> & IconProps & {};

export const CrossIcon: FC<ICrossIconProps> = ({
  color = "black",
  ...props
}) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M39.5 4.5L4.5 39.5M4.5 4.5L39.5 39.5"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
