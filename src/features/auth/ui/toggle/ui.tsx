"use client";
import { FC, useEffect, useState } from "react";

interface IToggleProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children" | "onChange"> {
  onChange?: (value: "left" | "right") => void;
  value?: "left" | "right";
  labels: {
    left: string;
    right: string;
  };
}

const styles = /* @tw */ {
  root: {
    base: "inline-flex p-0.5 border-main rounded-full text-input-sm select-none",
  },
  button: {
    base: "p-input-sm rounded-full text-center w-[70px] cursor-pointer",
    active: "bg-darkest text-lightest",
  },
};

export const Toggle: FC<IToggleProps> = ({
  onChange = () => {},
  labels,
  value: _value = "left",
  ...props
}) => {
  const [value, setValue] = useState<"right" | "left">(_value || "left");

  const handleClick = (newValue: "left" | "right") => {
    setValue(newValue);
  };

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <div className={styles.root.base}>
      <div
        className={`
        ${styles.button.base}
        ${value === "left" && styles.button.active}
      `}
        onClick={() => handleClick("left")}
      >
        {labels.left}
      </div>
      <div
        className={`
        ${styles.button.base}
        ${value === "right" && styles.button.active}
      `}
        onClick={() => handleClick("right")}
      >
        {labels.right}
      </div>
    </div>
  );
};
