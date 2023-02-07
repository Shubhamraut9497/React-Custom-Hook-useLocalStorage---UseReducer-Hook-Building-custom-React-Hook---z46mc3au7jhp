import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
  const [val, setValue] = useState(value);
  localStorage.setItem(stateVar, value);
  return [val, setValue];
};
// const newStorage = (key, value) => {

// };

export default useLocalStorage;


