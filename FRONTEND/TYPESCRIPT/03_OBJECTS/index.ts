type Employee = {
  emp_name: string;
  emp_code: number;
  emp_gender: string;
};

function addEmployee(employee: Employee): Employee {
  return employee;
}

addEmployee({ emp_name: "Shubham", emp_code: 1024, emp_gender: "Male" });
