import { useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState([
    {
      id: uuidv4(),
      name: "Manpreet Singh",
      address: "Punjabi Bagh",
      mobile: "9589671201",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dob: "12/07/1990",
    },
    {
      id: uuidv4(),
      name: "Gurupreet Singh",
      address: "Canada",
      mobile: "9219671201",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dob: "1/01/1980",
    },
    {
      id: uuidv4(),
      name: "Rohit Sherma",
      address: "Mumbai",
      mobile: "6789129091",
      avatar:
        "https://media.gettyimages.com/id/1497643647/photo/australia-v-india-icc-world-test-championship-final-2023-day-five.jpg?s=1024x1024&w=gi&k=20&c=hc0_iHKFlgUdZasgFfgD_VhAi-rYKYUU04t3JlUdV-8=",
      dob: "30/04/1987",
    },
  ]);
  const [currentEmployee, setCurrentEmployee] = useState([employeeData[0]]);
  const [showModal, setShowModal] = useState(false);

  const handleCurrentEmployee = (id) => {
    let data = [...employeeData];
    let filterSelUser = data.filter((cur) => cur.id === id);
    setCurrentEmployee(filterSelUser);
  };

  const context = {
    showModal,
    employeeData,
    currentEmployee,
    setShowModal,
    setEmployeeData,
    handleCurrentEmployee,
  };

  return (
    <EmployeeContext.Provider value={context}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
