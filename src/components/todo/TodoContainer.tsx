import { useTodo } from "./TodoService";
import TodoTemplate from "./template/TodoTemplate";
import TodoHead from "./template/head/TodoHead";
import TodoList from "./template/list/TodoList";
import TodoCreate from "./template/create/TodoCreate";
import TodoFooter from "./template/footer/TodoFooter";
import FilterBar from "./template/filter/FilterBar";

const TodoContainer = () => {
  const {
    todoState,
    nextIdState,
    printTodoState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
    filterTodo,
  } = useTodo();

  return (
    <>
      <TodoTemplate>
        <TodoHead />
        <TodoCreate
          nextId={nextIdState}
          createTodo={createTodo}
          incrementNextId={incrementNextId}
        />
        <FilterBar filterTodo={filterTodo} />
        <TodoList
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          todos={printTodoState}
        />
        <TodoFooter todos={printTodoState} />
      </TodoTemplate>
    </>
  );
};

export default TodoContainer;
