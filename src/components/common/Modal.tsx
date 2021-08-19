import React, { ReactChildren, ReactElement, useState } from "react";
import { Modal as ModalComponent, Button } from "antd";

interface ModalProps {
  isModalOpen?: boolean;
  setIsModalOpen?: object;
  showModal?: object;
  handleOk?: any;
  handleCancel?: any;
  children?: React.ReactNode;
  okText: string;
  cancelText: string;
}

export default function Modal({
  isModalOpen,
  handleOk,
  handleCancel,
  children,
  okText,
  cancelText,
}: ModalProps): ReactElement {
  return (
    <>
      <ModalComponent
        title="삭제확인"
        okText={okText}
        cancelText={cancelText}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </ModalComponent>
    </>
  );
}
