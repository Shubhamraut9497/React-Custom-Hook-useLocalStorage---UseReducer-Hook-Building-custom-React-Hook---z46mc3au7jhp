import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
  const [val, setValue] = useState(value);
  newStorage(stateVar, val);
  return [val, setValue];
};
const newStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export default useLocalStorage;

