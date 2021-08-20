import React, { ReactElement } from "react";
import { Modal as ModalComponent } from "antd";

interface ModalProps {
  isModalOpen?: boolean;
  setIsModalOpen?: object;
  showModal?: object;
  handleOk?: any;
  handleCancel?: any;
  children?: React.ReactNode;
  okText: string;
  cancelText: string;
  title: string;
}

export default function Modal({
  isModalOpen,
  handleOk,
  handleCancel,
  children,
  okText,
  cancelText,
  title,
}: ModalProps): ReactElement {
  return (
    <>
      <ModalComponent
        title={title}
        okText={okText}
        cancelText={cancelText}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        keyboard={true}
        destroyOnClose={true}
      >
        {children}
      </ModalComponent>
    </>
  );
}
