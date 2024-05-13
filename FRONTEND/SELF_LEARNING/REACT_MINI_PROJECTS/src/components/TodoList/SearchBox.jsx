import React, { useContext, useRef } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const SearchBox = () => {
  const { inputText, setInputText, handleAddData } = useContext(TodoContext);
  const idRef = useRef(6);
  const onSubmit = (e) => {
    e.preventDefault();

    let todoObj = {
      id: idRef.current,
      label: inputText,
      checked: false,
    };

    handleAddData(todoObj);

    idRef.current++;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex gap-5 justify-center items-center py-5"
    >
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="px-2 py-1 outline-none"
      />
      <button type="submit" className="bg-orange-200 px-4 py-1 rounded-md">
        Add
      </button>
    </form>
  );
};

export default SearchBox;
