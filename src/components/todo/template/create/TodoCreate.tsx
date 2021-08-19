import React, { useState } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Itodo } from "components/todo/TodoService";
import { DATE_FORMAT } from "utils/constants";
import { DatePicker, Space } from "antd";
import moment from "moment";
import Modal from "components/common/Modal";
import useModal, { IUseModal } from "utils/hooks/useModal";
import { dateToDday } from "utils/Date";

const CircleButton = styled.button<{ open: boolean }>`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 44px;
  padding-right: 60px;
  padding-bottom: 36px;
  position: relative;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

const StyledSpace = styled(Space)`
  flex-direction: row;
  position: absolute;
  top: 8px;
  & > .ant-space-item {
    line-height: 32px;
  }
  & .ant-space-item:last-child {
  }
`;

const StyledDatePicker = styled(DatePicker)<{ wrongDate: boolean }>`
  margin: 1px;
  border: ${(props) => (props.wrongDate ? "1px solid red" : "none")};
`;

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId,
}: TodoCreateProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [date, setDate] = useState(moment());
  const [wrongDate, setWrongDate] = useState(false);
  const handleToggle = () => setOpen(!open);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지
    if (value === "") {
      showModal();
      return;
    }
    createTodo({
      id: nextId,
      text: value,
      done: false,
      goalDate: date.format(DATE_FORMAT),
    });
    incrementNextId(); // nextId 하나 증가
    setValue(""); // input 초기화
    setOpen(false); // open 닫기
  };
  function onChange(date: any, dateString: any) {
    if (date === null) return;
    console.log(date, dateString);
    const leftDays = dateToDday(date.format(DATE_FORMAT));
    if (leftDays < 0) {
      setWrongDate(true);
    } else {
      setWrongDate(false);
      setDate(date);
    }
  }
  const {
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
  }: IUseModal = useModal();
  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <StyledSpace direction="vertical">
            <StyledDatePicker
              defaultValue={moment()}
              defaultPickerValue={moment()}
              onChange={onChange}
              wrongDate={wrongDate}
            />
            <span>{wrongDate ? "오늘로 설정됩니다." : "목표일 설정"}</span>
          </StyledSpace>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={handleChange}
            value={value}
          />
          <CircleButton onClick={handleToggle} open={open}>
            <PlusCircleOutlined />
          </CircleButton>
          <Modal
            title=""
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            okText="알겠습니다."
            cancelText="닫기"
          >
            <p>추가하려는 Todo를 채워주세요.</p>
          </Modal>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);
