import { FC } from "react";

interface ISearchIconProps extends React.HTMLAttributes<HTMLElement> {}

export const SearchIcon: FC<ISearchIconProps> = ({ color = "black" }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 26 26"
      stroke={color}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5 23.5L18.425 18.425M21.1667 11.8333C21.1667 16.988 16.988 21.1667 11.8333 21.1667C6.67868 21.1667 2.5 16.988 2.5 11.8333C2.5 6.67868 6.67868 2.5 11.8333 2.5C16.988 2.5 21.1667 6.67868 21.1667 11.8333Z"
        stroke-width="2.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
