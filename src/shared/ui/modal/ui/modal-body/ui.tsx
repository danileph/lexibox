"use client";
import React, { FC, ReactElement, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useScrollVisibility } from "@/shared/hooks/use-scroll";
import { CrossIcon } from "@/shared/ui/icons";

interface IModalBodyProps extends React.HTMLAttributes<HTMLElement> {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  header?: ReactElement[] | ReactElement;
}

const styles = /* @tw */ {
  underlay: {
    base: "fixed z-40 top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center !m-0",
  },
  modal: {
    base: "bg-lightest px-16 pr-8 py-12 rounded-lg border-darkest border-2 shadow-modal relative",
    isScrollShown: "pr-[calc(32px-3px)]",
  },
  buttonClose: {
    base: "absolute w-3 h-3 top-[26px] right-[26px]",
  },
  content: {
    base: "overflow-y-auto max-h-[calc(100vh-300px)] pr-8 pt-1 pb-1 overflow-x-hidden",
    isScrollShown: "pr-[calc(32px-3px)]",
  },
  header: {
    base: "stiky top-0 pr-8",
    isScrollShown: "pr-[calc(32px+3px)]",
  },
};

export const ModalBody: FC<IModalBodyProps> = ({
  setIsOpen,
  children,
  header,
  ...props
}) => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsOpen(false);
  };
  const refContent = useRef(null);
  const isScrollShown = useScrollVisibility(refContent);

  return (
    <div onClick={() => setIsOpen(false)} className={styles.underlay.base}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.modal.base} ${
          isScrollShown && styles.modal.isScrollShown
        }`}
      >
        <div
          className={`${styles.header.base} ${
            isScrollShown && styles.header.isScrollShown
          }`}
        >
          <button className={styles.buttonClose.base} onClick={handleClose}>
            <CrossIcon className={"w-3 h-3"} />
          </button>
          {header}
        </div>
        <div
          className={`${styles.content.base} ${
            isScrollShown && styles.content.isScrollShown
          }`}
          ref={refContent}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
