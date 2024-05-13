import { v4 as uuidv4 } from "uuid";
import React, { useContext } from "react";
import { DraggableNodeContexts } from "../../contexts/DraggableNodeContexts";

const NodeForm = () => {
  const { handleAddNodes, inputText, setInputText } = useContext(
    DraggableNodeContexts
  );

  const onSubmit = (e) => {
    e.preventDefault();

    let nodeObj = {
      id: uuidv4(),
      title: inputText,
    };

    handleAddNodes(nodeObj);
    setInputText("");
  };

  return (
    <form onSubmit={onSubmit} className="flex justify-center gap-5 p-4">
      <input
        type="text"
        value={inputText}
        placeholder="Type here ...."
        className="px-4 py-2 rounded-sm outline-none"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="bg-orange-300 px-4 rounded">Add Notes</button>
    </form>
  );
};

export default NodeForm;
