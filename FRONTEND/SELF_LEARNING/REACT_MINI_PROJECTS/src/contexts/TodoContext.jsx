import { createContext, useState } from "react";
import { todoList } from "../utils";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [data, setData] = useState(todoList);
  const [inputText, setInputText] = useState("");

  const handleCheckboxData = (id) => {
    // console.log(id);
    let listData = [...data];
    listData[id - 1]["checked"] = !listData[id - 1]["checked"];
    let element = document.getElementById(id);
    // console.log(element);
    if (listData[id - 1]["checked"]) element.classList.add("status_done");
    else element.classList.remove("status_done");
    // console.log(listData);
    setData(listData);
  };

  const handleAddData = (obj) => {
    setData((preData) => [...preData, obj]);
  };

  const handleDeleteData = (id) => {
    let listData = [...data];
    let filterData = listData.filter((cur) => cur.id !== id);
    // console.log(filterData);
    setData(filterData);
  };

  const context = {
    data,
    setData,
    handleCheckboxData,
    handleDeleteData,
    handleAddData,
    inputText,
    setInputText,
  };

  return (
    <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
