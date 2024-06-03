import React, { useContext } from "react";
import { EmployeeContext } from "../../../contexts/EmployeeContexts";

const EmployeeHeader = () => {
  const { showModal, setShowModal } = useContext(EmployeeContext);
  return (
    <div className="flex justify-between items-center p-2">
      <h2 className="text-4xl">Employee DataBase Management</h2>
      <button
        className="bg-blue-200 p-2"
        onClick={() => setShowModal(!showModal)}
      >
        Add Employee
      </button>
    </div>
  );
};

export default EmployeeHeader;
