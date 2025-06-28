import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    // setCount(count + 1);
    // setCount(count + 2);
    // setCount(count + 3);
    // setCount(count + 4);
    // // The below +5 will be added each time the button is clicked,due to the way React batches state updates.
    // setCount(count + 5);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    // The below +5 will be added each time the button is clicked, because now the updated value is depended on previous value.
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <h1>Counter : {count}</h1>
        <button
          onClick={addCount}
          style={{ padding: "5px", marginLeft: "10px" }}
        >
          Add
        </button>
        <button onClick={reset} style={{ padding: "5px", marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
