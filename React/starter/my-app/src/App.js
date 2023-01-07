import React, { useContext, createContext, useState } from "react";
import "./style.css";

const CountContext = createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Count() {
  const { count } = useContext(CountContext);
  return <h3>{`Current count: ${count}`}</h3>;
}

function CountButton() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}

function App() {
  return (
    <CountProvider>
      <Count />
      <CountButton />
    </CountProvider>
  );
}

export default App;
