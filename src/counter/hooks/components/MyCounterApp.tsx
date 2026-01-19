import { useCounter } from "../useCounter";

export const MyCounterApp = () => {
  const { counter, handleAdd, handleReset, handleSubtract } = useCounter(15);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <h1>Counter: {counter}</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
