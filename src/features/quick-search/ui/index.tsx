"use client";
import { FC } from "react";
import { Modal } from "@/shared/ui/modal";
import { Trigger } from "@/features/quick-search/ui/trigger";

interface IQuickSearchProps extends React.HTMLAttributes<HTMLElement> {}

export const QuickSearch: FC<IQuickSearchProps> = ({ ...props }) => {
  return (
    <Modal
      trigger={(setIsOpen) => (
        <Trigger onClick={() => setIsOpen(true)} {...props} />
      )}
    >
      {(setIsOpen) => <div className={"w-300"}>Hello word</div>}
    </Modal>
  );
};
