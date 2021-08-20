import { useTodo } from "components/todo/TodoService";
import TodoTemplate from "components/todo/template/TodoTemplate";
import TodoHead from "components/todo/template/head/TodoHead";
import TodoList from "components/todo/template/list/TodoList";
import TodoCreate from "components/todo/template/create/TodoCreate";
import TodoFooter from "components/todo/template/footer/TodoFooter";
import FilterBar from "components/todo/template/filter/FilterBar";

const TodoContainer = () => {
  const {
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
