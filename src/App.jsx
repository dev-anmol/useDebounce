//you can basically use this logic in diff. components e.g to trigger a search API call


import { useEffect, useState } from "react";
import "./App.css";

function useDebounce(inputValue, delay) {
  //state to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    //set up a timer to update the debounced value after the specified delay
    const timeOutId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    //clean up the timer if the value changes before the delay has passed
    return () => clearTimeout(timeOutId);
  }, [inputValue, delay]);
}

function App() {
  const [count, setCount] = useState(0);

  return <></>;
}

export default App;
