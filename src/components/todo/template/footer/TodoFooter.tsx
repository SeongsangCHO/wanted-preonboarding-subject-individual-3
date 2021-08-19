import { Itodo } from "components/todo/TodoService";
import React from "react";
import styled from "styled-components";

const TodoFooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const LeftText = styled.div`
  color: #33bb77;
  font-size: 18px;
`;

interface HooksTodoHeadProps {
  todos: Itodo[];
}

const Todofooter = ({ todos }: HooksTodoHeadProps) => {
  const undoneTasks = todos.filter((todo) => !todo.done);
  return (
    <TodoFooterBlock>
      <LeftText className="tasks-left">
        {undoneTasks.length} items left
      </LeftText>
    </TodoFooterBlock>
  );
};

export default React.memo(Todofooter);
