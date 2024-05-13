import NodeForm from "./NodeForm";
import DraggableContainer from "./DraggableContainer";
import { NodeProvider } from "../../contexts/DraggableNodeContexts";

const DraggableNodes = () => {
  return (
    <NodeProvider>
      <div className="bg-orange-500 w-full h-full">
        <NodeForm />
        <DraggableContainer />
      </div>
    </NodeProvider>
  );
};

export default DraggableNodes;
