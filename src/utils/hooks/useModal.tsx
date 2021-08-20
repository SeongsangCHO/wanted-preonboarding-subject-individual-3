import { useState } from "react";

export interface IUseModal {
  isModalOpen: boolean;
  setIsModalOpen: object;
  showModal: Function;
  handleOk: any;
  handleCancel: any;
  isOkClick: boolean;
}
export default function Modal(): any {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOkClick, setIsOkClick] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsOkClick((prev) => true);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsOkClick((prev) => false);
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    setIsModalOpen,
    showModal,
    handleOk,
    handleCancel,
    isOkClick,
  };
}
