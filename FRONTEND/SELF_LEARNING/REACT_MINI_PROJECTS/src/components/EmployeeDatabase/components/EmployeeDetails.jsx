const EmployeeDetails = ({ currentEmployee }) => {
  // for Ref
  // console.log(currentEmployee);
  // address: "Shyam Vihar";
  // dob: "12/Jul/1998";
  // id: "5d5fa825-37fe-424a-bec3-f97692fb1a72";
  // mobile: "9711071504";
  // name: "  Shubham";
  return (
    <div className="border w-4/5">
      <h2 className="text-center mt-3 font-bold text-2xl">
        Employee Information
      </h2>
      {currentEmployee.map((emp) => {
        return (
          <div className="flex h-full items-center flex-col">
            <figure>
              <img
                className="w-68 h-72 rounded-full my-10"
                src={emp.avatar}
                alt={emp.avatar}
              />
            </figure>
            <h3>
              Employee Name: <span>{emp.name}</span>
            </h3>
            <p>
              Employee Address: <span>{emp.address}</span>
            </p>
            <p>
              Employee Mobile: <span>{emp.mobile}</span>
            </p>
            <p>
              Employee Birth: <span>{emp.dob}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeDetails;
