"use client";
import React, { FC, ReactElement, useState } from "react";
import { ModalBody } from "../ui/modal-body";
import { Button } from "@/shared/ui/button";

interface IModalProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  label: string;
  children: (
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  ) => ReactElement;
  trigger: (
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  ) => ReactElement;
  header?: ReactElement[] | ReactElement;
}

export const Modal: FC<IModalProps> = ({
  label,
  children,
  header,
  trigger,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {trigger(setIsOpen)}
      {isOpen && (
        <ModalBody setIsOpen={setIsOpen} header={header}>
          {React.cloneElement(children(setIsOpen))}
        </ModalBody>
      )}
    </>
  );
};
