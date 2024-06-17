"use client";
import { Modal as AntModal, ModalProps } from "antd";
import { useAtom } from "jotai";
import { modalReducerAtom } from "@/app/_data/modalState";

interface IModalProps extends ModalProps {}

const Modal: React.FunctionComponent<IModalProps> = ({}) => {
  //   reducer sample for jotai uses dispatch instead of setModal
  const [modal, dispatch] = useAtom(modalReducerAtom);

  const handleCancel = () => {
    dispatch({ type: "close" });
  };

  return (
    <AntModal
      open={modal?.open}
      onCancel={handleCancel}
      // hide the default ok & cancel buttons
      footer={null}
    >
      {modal?.content}
    </AntModal>
  );
};

export default Modal;
