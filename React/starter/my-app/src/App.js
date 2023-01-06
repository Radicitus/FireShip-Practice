import React, { useState } from "react";
import "./style.css";

const LoadingButton = (props) => {
  const { onClick, loading, label } = props;

  return (
    <button onClick={onClick} type={"button"}>
      {loading ? <div className={"loader"}></div> : label}
    </button>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <LoadingButton
        label={"Press me"}
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      />
    </>
  );
}

export default App;
