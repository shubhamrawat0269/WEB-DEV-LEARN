import { useContext } from "react";
import { EmployeeContext } from "../../../contexts/EmployeeContexts";

const EmployeeHeader = () => {
  const { setShowModal } = useContext(EmployeeContext);
  return (
    <div className="flex__prop">
      <h1>Employee Database System</h1>
      <button className="btn text-white" onClick={() => setShowModal(true)}>
        Add
      </button>
    </div>
  );
};

export default EmployeeHeader;
