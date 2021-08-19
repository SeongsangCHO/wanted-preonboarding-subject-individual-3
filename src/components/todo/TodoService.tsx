/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { getLocalStorageItem, getTodoListLastId } from "utils/Storage";

export type Itodo = {
  id: number;
  text: string;
  done: boolean;
};

let initialTodos: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);
  const [nextIdState, setNextIdState] = useState(getTodoListLastId("todos"));

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const incrementNextId = () => {
    setNextIdState(nextIdState + 1);
  };

  const toggleTodo = (id: number) => {
    //@TODO
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.filter((todo: Itodo) => todo.id === id)
    );
  };

  const createTodo = (todo: Itodo) => {
    const nextId = nextIdState + 1;
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextIdState,
      })
    );
  };

  const loadData = () => {
    initialTodos = getLocalStorageItem("todos");
    if (initialTodos && initialTodos.length >= 1) {
      incrementNextId();
    }
    setTodoState(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  };
};
