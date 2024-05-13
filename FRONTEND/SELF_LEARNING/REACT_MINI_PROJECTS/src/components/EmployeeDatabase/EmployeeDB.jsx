import { EmployeeProvider } from "../../contexts/EmployeeContexts";
import EmployeeData from "./components/EmployeeData";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeHeader from "./components/EmployeeHeader";

const EmployeeDB = () => {
  return (
    <EmployeeProvider>
      <div className="m-3 p-3">
        {/* EmployeeHeader  */}
        <EmployeeHeader />
        {/* EmployeeData  */}
        <EmployeeData />
        <EmployeeForm />
      </div>
    </EmployeeProvider>
  );
};

export default EmployeeDB;
