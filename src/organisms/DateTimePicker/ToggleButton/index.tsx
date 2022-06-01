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
    <div className="relative w-[300px] flex bg-gray-300 outline outline-[3px] outline-gray-300">
      <button
        className={`z-[2] w-[50%] px-[10px] py-[5px] grid grid-rows-2}`}
        onClick={() => setToggle("start")}>
        <span className="flex content-start"> Začátek </span>
        <span className="flex content-start"> {startDate} </span>
      </button>
      <button
        className={`z-[2] w-[50%] px-[10px] py-[5px] grid grid-rows-2}`}
        onClick={() => setToggle("end")}>
          <span className="flex content-start"> Konec </span>
          <span className="flex content-start"> {endDate} </span>
      </button>
      <div className={`absolute w-[50%] h-[100%] bg-white transition ${toggle === "start" && "shadow-md-right"} ${toggle === "end" && "translate-x-[100%] shadow-md-left" }`}/>
    </div>
  );
};

export default ToggleButton;
