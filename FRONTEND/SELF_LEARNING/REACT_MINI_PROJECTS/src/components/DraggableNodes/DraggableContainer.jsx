// import Draggable from "react-draggable";
import React, { useContext } from "react";
import { DraggableNodeContexts } from "../../contexts/DraggableNodeContexts";

const DraggableContainer = () => {
  const { nodeList } = useContext(DraggableNodeContexts);
  return (
    <div className="draggable__container" style={{ height: "41.5rem" }}>
      {nodeList.map((cur) => {
        return (
          <div key={cur.id} className="bg-orange-200 w-96 p-2 rounded-md">
            <h2>{cur.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default DraggableContainer;
