import { useContext } from "react";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeNameList from "./EmployeeNameList";
import { EmployeeContext } from "../../../contexts/EmployeeContexts";

const EmployeeData = () => {
  const { employeeData, currentEmployee, handleCurrentEmployee } =
    useContext(EmployeeContext);
  return (
    <div className="flex gap-5 w-full mt-3 employee__data">
      {/* EmployeeNameList  */}
      <EmployeeNameList
        data={employeeData}
        dispathCurrentEmployee={handleCurrentEmployee}
      />
      {/* EmployeeDetails  */}
      <EmployeeDetails currentEmployee={currentEmployee} />
    </div>
  );
};

export default EmployeeData;
