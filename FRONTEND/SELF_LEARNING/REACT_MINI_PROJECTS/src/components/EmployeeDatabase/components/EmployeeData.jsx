import React from "react";

const EmployeeData = () => {
  return (
    <div className="w-full h-[80vh] grid place-content-center gap-3 text-center">
      <figure>
        <img src="images/profile.png" width={250} alt="Profile" />
      </figure>
      <div>name</div>
      <div>address</div>
      <div>mail</div>
      <div>mobile</div>
      <div>DOB</div>
    </div>
  );
};

export default EmployeeData;
