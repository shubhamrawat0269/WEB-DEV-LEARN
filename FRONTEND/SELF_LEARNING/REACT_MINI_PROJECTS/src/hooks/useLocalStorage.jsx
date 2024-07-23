import { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  // implementation for value
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) return JSON.parse(value);
      else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  // implementation for setter function

  const setLocalStorage = (valueOrFunc) => {
    let newVal;

    if (typeof valueOrFunc === "function")
      newVal = valueOrFunc(localStorageValue);
    else newVal = valueOrFunc;

    localStorage.setItem(key, JSON.stringify(newVal));
    setLocalStorageValue(newVal);
  };

  return [localStorageValue, setLocalStorage];
};

export default useLocalStorage;
