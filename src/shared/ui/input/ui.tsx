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
  fullWidth?: boolean;
}

const styles = /* @tw */ {
  input: {
    base: "peer relative z-20 border-darkest border-2 hover:backdrop-brightness-95 bg-transparent focus:outline-none focus:backdrop-brightness-95 shadow-input placeholder-gray",
    variants: {
      primary: "",
      secondary: "",
    },
    sizes: {
      small:
        "p-input-sm rounded-input-sm h-input-sm text-input-sm placeholder:text-input-sm",
      medium:
        "p-input-md rounded-input-md h-input-md text-input-md placeholder:text-input-md",
      large:
        "p-input-lg rounded-input-lg h-input-lg text-input-lg placeholder:text-input-lg",
    },
    fullWidth: "w-full",
    withLabel: {
      small: "",
      medium: "",
      large: "pt-[24px] pb-[7px]",
    },
  },
  wrap: {
    base: "relative inline-block",
    fullWidth: "w-full",
  },
  label: {
    base: `absolute z-10 top-0 left-0 h-full flex flex-col justify-center text-gray w-full cursor-text select-none border-2 border-transparent`,
    size: {
      small: "p-input-sm rounded-input-sm h-input-sm text-input-sm ",
      medium: "p-input-md rounded-input-md h-input-md text-input-md",
      large:
        "p-input-lg rounded-input-lg h-input-lg text-input-lg peer-focus:translate-y-[-9px] peer-active:translate-y-[-9px] peer-focus:text-xs peer-active:text-xs",
    },
    active: {
      small: "hidden",
      medium: "hidden",
      large: "text-xs translate-y-[-9px]",
    },
  },
};

export const Input: FC<IInputProps> = ({
  value: defaultValue,
  wrapProps,
  withLabel = false,
  placeholder,
  size = "medium",
  onChange = () => {},
  fullWidth = false,
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
    <div
      className={twMerge(
        styles.wrap.base,
        fullWidth && styles.wrap.fullWidth,
        wrapClassName,
      )}
      {...otherWrapProps}
    >
      <input
        id={id}
        type="text"
        placeholder={!withLabel ? placeholder : undefined}
        className={twMerge(
          styles.input.base,
          styles.input.sizes[size],
          withLabel && placeholder && styles.input.withLabel[size],
          fullWidth && styles.input.fullWidth,
        )}
        onChange={handleOnChange}
        value={value}
        {...other}
      />
      {withLabel && placeholder && (
        <label
          htmlFor={id}
          className={`
            ${styles.label.base}
            ${styles.label.size[size]}
            ${value !== "" && styles.label.active[size]}
          `}
        >
          {placeholder}
        </label>
      )}
    </div>
  );
};
