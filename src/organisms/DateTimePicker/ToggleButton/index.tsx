import React, { Children } from "react";
import msToTime from "../../../utils/msToTime";
import styles from "./styles.module.css";
import generateTimeList from "../../../utils/timeList";

type ButtonTypes = {
  toggle: "start" | "end",
  setToggle: (toggle: "start" | "end") => void,
  startDate: string,
  endDate: string,
}

const ToggleButton = ({ toggle, setToggle, startDate, endDate }: ButtonTypes) => {

  return (
    <div className="w-[300px] grid grid-cols-2">
      <button
        className={`grid grid-cols-2, :disabled-text-text-light-gray ${toggle === "start" ? "text-main-white bg-main-blue" : "text-text-color border-1 border-dark-gray"}`}
        onClick={() => setToggle("start")}>
        <span> Začátek </span>
        <span> {startDate} </span>
      </button>
      <button
        className={`grid grid-cols-2, ${toggle === "end" ? "text-main-white bg-main-blue" : "text-text-color border-1 border-dark-gray"}`}
        onClick={() => setToggle("end")}>
          <span> Konec </span>
          <span> {endDate} </span>
      </button>
    </div>
  );
};

export default ToggleButton;
