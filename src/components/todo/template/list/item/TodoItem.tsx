import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Itodo } from "components/todo/TodoService";
import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { dateToDday } from "utils/Date";
import useModal, { IUseModal } from "utils/hooks/useModal";
import Modal from "components/common/Modal";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;
const GoalDateText = styled.span<{ done: boolean }>`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  font-size: 16px;
  margin-right: 5px;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  text-overflow: ellipsis;
  overflow: hidden;
  flex: 1;
  font-size: 16px;
  color: #119955;
  transition: 2s;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
  &:hover {
    word-break: break-word;
    overflow: visible;
  }
`;

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const {
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
    isOkClick,
  }: IUseModal = useModal();
  const dDayText = () => {
    const leftDays = dateToDday(todo.goalDate);
    const dDay = leftDays === 0 ? "오늘까지" : "D-" + leftDays;
    if (leftDays < 0) {
      return `${-leftDays}일 지났어요`;
    }
    return dDay;
  };
  const handleToggle = () => {
    toggleTodo(todo.id);
  };
  useEffect(() => {
    if (isOkClick) {
      removeTodo(todo.id);
    }
  }, [isOkClick]);
  const handleRemove = () => {
    if (todo.done === false) {
      showModal();
    } else removeTodo(todo.id);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={todo.done} onClick={handleToggle}>
        {todo.done && <CheckOutlined />}
      </CheckCircle>
      <Text done={todo.done}>{todo.text}</Text>
      <GoalDateText done={todo.done}>{dDayText()}</GoalDateText>
      <Remove onClick={handleRemove}>
        <DeleteOutlined />
      </Remove>
      <Modal
        title="삭제확인"
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        okText="삭제"
        cancelText="😋 더 해볼게요"
      >
        <p>완료 전인데 삭제하시겠어요?</p>
      </Modal>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
