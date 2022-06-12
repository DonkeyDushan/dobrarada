import React from "react";
import ReactDOM from "react-dom";
import DateTimePicker from "./organisms/DateTimePicker";
import DatePicker from "./organisms/DateTimePicker/DatePicker";
import "./global.css";

const App = () => <DateTimePicker />;

ReactDOM.render(<App />, document.getElementById("app"));
