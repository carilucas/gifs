import { useState } from "react";

interface useCounterProps {
  counter: number;
  handleAdd: () => void;
  handleSubtract: () => void;
  handleReset: () => void;
}

export const useCounter = (initialState: number = 5): useCounterProps => {
  const [counter, setCounter] = useState(initialState);
  const handleAdd = () => {
    setCounter((prevState) => prevState + 1);
  };
  const handleSubtract = () => {
    if (counter === 0) return;
    setCounter((prevState) => prevState - 1);
  };
  const handleReset = () => {
    setCounter(initialState);
  };
  return { counter, handleAdd, handleSubtract, handleReset };
};
