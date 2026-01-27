import { useEffect, useState } from "react";

const useLocalStorage = (key, initialData) => {
  const existingData = localStorage.getItem(key);
  const [updatedData, setUpdatedData] = useState(
    existingData ? JSON.parse(existingData) : initialData,
  );

  useEffect(() => {
    if (existingData) {
      setUpdatedData(existingData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, []);

  const updateLocalStorage = (newData) => {
    // console.log(newData)
    const valueToStore =
      newData instanceof Function ? value(updatedData) : newData;
    setUpdatedData(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [updatedData, updateLocalStorage];
};

export default useLocalStorage;
