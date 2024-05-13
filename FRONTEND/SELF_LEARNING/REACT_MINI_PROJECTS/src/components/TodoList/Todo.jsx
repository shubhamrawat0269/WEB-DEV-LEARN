import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const Todo = () => {
  const { data, handleCheckboxData, handleDeleteData } =
    useContext(TodoContext);
  return (
    <div className="my-4 px-5">
      <div>
        {data.map((cur) => {
          return (
            <div
              key={cur.id}
              className="flex items-center justify-between mb-2 gap-2 border p-2 rounded-lg"
            >
              <div className="flex justify-center gap-2 items-center">
                <input
                  type="checkbox"
                  checked={cur.checked}
                  onClick={() => handleCheckboxData(cur.id)}
                />
                <span id={cur.id}>{cur.label}</span>
              </div>
              <button
                className="bg-orange-200 px-4 py-1 rounded-md"
                onClick={() => handleDeleteData(cur.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
