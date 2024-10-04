import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  // passiamo una callback all'interno di uno state hook
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
