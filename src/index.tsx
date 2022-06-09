import React, { useState } from "react";
import ReactDOM from "react-dom";
import DateTimePicker from "./organisms/DateTimePicker";
import DatePicker from "./organisms/DateTimePicker/DatePicker";

const App = () => {
  return (
    <>
      <DateTimePicker />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
