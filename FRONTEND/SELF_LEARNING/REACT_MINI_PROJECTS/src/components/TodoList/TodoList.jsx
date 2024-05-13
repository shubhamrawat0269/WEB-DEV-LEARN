import React from "react";
import { TodoProvider } from "../../contexts/TodoContext";
import SearchBox from "./SearchBox";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <TodoProvider>
      <div className="bg-orange-400 w-full h-full">
        <SearchBox />
        <Todo />
      </div>
    </TodoProvider>
  );
};

export default TodoList;
