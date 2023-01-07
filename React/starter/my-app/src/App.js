import React, { useState } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  // const [state, setState] = useState({ count: 0, user: 'Bob' });

  const handleClick = () => {
    setCount((prev) => {
      setPrevCount(prev);
    });
    setCount(count + 1);
  };

  // const handleClick = () => {
  //   setState({
  //     ...state,
  //     count: state.count + 1,
  //   });
  // };

  return (
    <>
      <h3>Current count: {count}</h3>
      <h3>Previous count: {prevCount}</h3>
      {/* <h3>Count: {state.count}</h3>
      <h3>User: {state.user}</h3> */}
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default App;
