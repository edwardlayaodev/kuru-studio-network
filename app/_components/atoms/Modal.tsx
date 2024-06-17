"use client";
import { Modal as AntModal, ModalProps } from "antd";
import { useAtom } from "jotai";
import { modalAtom } from "@/app/_data/atoms";
import { ReactNode } from "react";

interface IModalProps extends ModalProps {
  content: ReactNode;
}

const Modal: React.FunctionComponent<IModalProps> = ({ content }) => {
  const [openModal, setOpenModal] = useAtom(modalAtom);

  return (
    <AntModal
      open={openModal}
      onCancel={() => {
        setOpenModal(false);
      }}
      // hide the default ok & cancel buttons
      footer={null}
    >
      {content}
    </AntModal>
  );
};

export default Modal;
