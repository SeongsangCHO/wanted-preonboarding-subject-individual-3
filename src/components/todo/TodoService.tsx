/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { dateToDday } from "utils/Date";
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
  const [printTodoState, setPrintTodoState] = useState(initialTodos);
  const [filterType, setFilterType] = useState("all");
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
    filterTodo(filterType);
  }, [todoState]);

  const incrementNextId = () => {
    setNextIdState(nextIdState + 1);
  };

  const toggleTodo = (id: number) => {
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
    setPrintTodoState(initialTodos);
  };

  const saveData = () => {
    setLocalStorageItem("todos", todoState);
  };

  const filterTodo = (type: string) => {
    setFilterType(type);
    console.log(printTodoState);
    switch (type) {
      case "all":
        setPrintTodoState([...todoState]);
        return;
      case "undone":
        const todoData = todoState.filter((todo) => todo.done === false);
        setPrintTodoState([...todoData]);
        return;
      case "notdone":
        const notDoneData = todoState.filter(
          (todo) => dateToDday(todo.goalDate) < 0
        );
        setPrintTodoState([...notDoneData]);
        return;
      case "done":
        const doneData = todoState.filter((todo) => todo.done === true);
        setPrintTodoState([...doneData]);
        return;
      default:
        break;
    }
  };
  return {
    todoState,
    nextIdState,
    printTodoState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
    filterTodo,
  };
};
