import { createContext, useState } from "react";

const DraggableNodeContexts = createContext();

const NodeProvider = ({ children }) => {
  const [nodeList, setNodeList] = useState([]);
  const [inputText, setInputText] = useState("");

  const [isDrag, setIsDrag] = useState(false);
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);

  const handleMouseDown = (e) => {
    setIsDrag(true);
    setXCoordinate(e.clientX - element.getBoundingClientRect().left);
    setYCoordinate(e.clientY - element.getBoundingClientRect().top);
  };

  const handleMouseMove = (e) => {
    if (isDrag) {
      element.style.left = event.clientX - offset.x + "px";
      element.style.top = event.clientY - offset.y + "px";
    }
  };

  const handleAddNodes = (node) => {
    setNodeList((preNode) => [...preNode, node]);
  };

  const context = {
    nodeList,
    handleAddNodes,
    inputText,
    setInputText,
  };

  return (
    <DraggableNodeContexts.Provider value={context}>
      {children}
    </DraggableNodeContexts.Provider>
  );
};

export { DraggableNodeContexts, NodeProvider };
