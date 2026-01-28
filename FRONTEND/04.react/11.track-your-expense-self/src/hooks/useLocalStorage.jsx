import { useEffect, useState } from "react";

const useLocalStorage = (key, initialData) => {
  const [updatedData, setUpdatedData] = useState(initialData);
  
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    if (existingData) {
      setUpdatedData(existingData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, []);

  const updateLocalStorage = (newData) => {
    const valueToStore =
      typeof newData === "function" ? newData(updatedData) : newData;
    setUpdatedData(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [updatedData, updateLocalStorage];
};

export default useLocalStorage;
