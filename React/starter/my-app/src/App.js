import React, { useState } from "react";
import "./style.css";

const data = [
  { id: 1, name: "Fido 🐕" },
  { id: 2, name: "Snowball 🐈" },
  { id: 3, name: "Murph 🐈‍⬛" },
  { id: 4, name: "Zelda 🐈" },
];

function App() {
  return (
    <>
      <ul>
        {data.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
