import React from "react";
import "./App.css";
import Button from "../src/components/Button/Button";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Button />
    </div>
  );
}

export default App;
