import EmployeeData from "./EmployeeData";

const EmployeeInfo = () => {
  return (
    <div className="flex gap-2 w-full h-[90vh]">
      <div className="border w-1/6">
        <ol>
          <li>Shubham</li>
          <li>Aditi</li>
          <li>Sonal</li>
        </ol>
      </div>
      <div className="border w-5/6">
        <h2 className="text-center text-3xl my-4">Employee Information</h2>
        <EmployeeData />
      </div>
    </div>
  );
};

export default EmployeeInfo;
