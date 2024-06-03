import { createContext, useState } from "react";

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const contexts = {
    showModal,
    setShowModal,
  };

  return (
    <EmployeeContext.Provider value={contexts}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
