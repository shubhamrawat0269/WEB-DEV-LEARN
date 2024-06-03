import { EmployeeProvider } from "../../contexts/EmployeeContexts";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeHeader from "./components/EmployeeHeader";
import EmployeeInfo from "./components/EmployeeInfo";

const EmployeeDB = () => {

  return (
    <EmployeeProvider>
      <div className="w-full h-full relative">
        <EmployeeHeader />
        <EmployeeInfo />

        <EmployeeForm />
      </div>
    </EmployeeProvider>
  );
};

export default EmployeeDB;
