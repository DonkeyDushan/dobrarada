import React, { Children } from "react";
import msToTime from "../../../utils/msToTime";
import styles from "./styles.module.css";
import generateTimeList from "../../../utils/timeList";

type ButtonTypes = {
  setToggleStartEnd: (toggleStartEnd: boolean) => void,
  start: boolean,
  date: string,
}

const ToggleButton = ({ setToggleStartEnd, start, date }: ButtonTypes) => {

  return (
    <button className={styles.ToggleButton} onClick={() => setToggleStartEnd(start)}>
      {start ? "Začátek" : "Konec"}
      {date}
    </button>
  );
};

export default ToggleButton;
