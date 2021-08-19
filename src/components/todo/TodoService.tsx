/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  getLocalStorageItem,
  getTodoListLastId,
  setLocalStorageItem,
} from "utils/Storage";

export type Itodo = {
  id: number;
  text: string;
  done: boolean;
  goalDate: string;
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
    const toggledIndex = todoState.findIndex((todo) => todo.id === id);
    const toggledTodo = {
      ...todoState[toggledIndex],
      done: !todoState[toggledIndex].done,
    };
    setTodoState([
      ...todoState.slice(0, toggledIndex),
      toggledTodo,
      ...todoState.slice(toggledIndex + 1, todoState.length),
    ]);
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.filter((todo: Itodo) => todo.id !== id)
    );
  };

  const createTodo = (todo: Itodo) => {
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
    setLocalStorageItem("todos", todoState);
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
