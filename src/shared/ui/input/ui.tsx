"use client";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";
interface IInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "placeholder"
  > {
  size?: "small" | "medium" | "large";
  withLabel?: boolean;
  placeholder?: string;
  wrapProps?: React.HTMLAttributes<HTMLElement>;
}

const styles = /* @tw */ {
  wrap: "relative inline-block",
  base: "peer relative z-20 border-darkest border-2 rounded-[8px] px-4 py-2 font-semibold hover:backdrop-brightness-95 bg-transparent focus:outline-none focus:backdrop-brightness-95 shadow-input placeholder-gray",
  variants: {
    primary: "",
    secondary: "",
  },
  sizes: {
    small: "py-1.5 px-3 rounded-[7px]",
    medium: "",
    large: "py-2.5 rounded-[9px] h-[48px]",
  },
  label: `absolute z-10 top-0 left-0 h-full flex flex-col justify-center ml-[calc(1rem+2px)] text-gray w-[calc(100%-1rem-2px)] cursor-text peer-focus:text-xs peer-active:text-xs peer-focus:translate-y-[-8px] peer-active:translate-y-[-8px] select-none`,
  labelActive: "text-xs translate-y-[-8px]",
  inputWithLabel: "pt-[20px] pb-[4px] h-[48px]",
};

export const Input: FC<IInputProps> = ({
  value: defaultValue,
  wrapProps,
  withLabel = false,
  placeholder,
  size = "medium",
  onChange = () => {},
  ...other
}) => {
  const { className: wrapClassName, ...otherWrapProps } = wrapProps || {};
  const id = uuidv4();
  const [value, setValue] = useState(defaultValue || "");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setValue(e.target.value);
  };

  return (
    <div className={twMerge(styles.wrap, wrapClassName)} {...otherWrapProps}>
      <input
        id={id}
        type="text"
        placeholder={!withLabel ? placeholder : undefined}
        className={twMerge(
          styles.base,
          !withLabel && styles.sizes[size],
          withLabel && placeholder && styles.inputWithLabel,
        )}
        onChange={handleOnChange}
        value={value}
        {...other}
      />
      {withLabel && placeholder && (
        <label
          htmlFor={id}
          className={twMerge(styles.label, value !== "" && styles.labelActive)}
        >
          {placeholder}
        </label>
      )}
    </div>
  );
};
