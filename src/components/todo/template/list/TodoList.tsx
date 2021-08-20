import React from "react";
import { Itodo } from "components/todo/TodoService";
import TodoItem from "components/todo/template/list/item/TodoItem";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const Text = styled.p`
  text-align: center;
  margin: 0;
  color: #696969;
`;
interface TodoListProps {
  todos: Itodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList = ({ toggleTodo, removeTodo, todos }: TodoListProps) => {
  return (
    <TodoListBlock>
      {todos.length === 0 && <Text>✅ Todo로 할 일을 관리해요! ✅</Text>}
      {todos &&
        todos.map((todo) => (
          <TodoItem
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            key={todo.id}
            todo={todo}
          />
        ))}
    </TodoListBlock>
  );
};

export default React.memo(TodoList);
