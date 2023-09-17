"use client";
import React, { FC, ReactElement, useState } from "react";
import { ModalBody } from "../ui/modal-body";
import { Button } from "@/shared/ui/button";

interface IModalProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  label: string;
  children: (setIsOpen: (...args: any) => any) => ReactElement;
  header?: ReactElement[] | ReactElement;
}

export const Modal: FC<IModalProps> = ({
  label,
  onClick = () => {},
  children,
  header,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick(e);
    setIsOpen(true);
  };

  return (
    <>
      <Button size={"large"} onClick={handleClick} {...props}>
        Open Dialog
      </Button>
      {isOpen && (
        <ModalBody setIsOpen={setIsOpen} header={header}>
          {React.cloneElement(children(setIsOpen))}
        </ModalBody>
      )}
    </>
  );
};
