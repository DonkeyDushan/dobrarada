import React, { useState } from "react";
import ReactDOM from "react-dom";
import DateTimePicker from "./organisms/DateTimePicker";

const App = () => {
  const [fontSize, setFontSize] = useState(12);

  return (
    <>
      <DateTimePicker />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
