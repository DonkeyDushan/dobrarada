import React from "react";
import msToTime from "../../../utils/msToTime";
import styles from "./styles.module.css";
import generateTimeList from "../../../utils/timeList";

type TimeTypes = {
  setTime: (time: number) => void,
  time: number,
}

const TimePicker = ({ setTime, time }: TimeTypes) => {

  return (
    <div className={styles.TimeWrapper}>
      {generateTimeList(30).map((num) => (
        <div
          className={styles.TimeButton}
          onClick={() => setTime(num)}
        >
          {msToTime(num)}
        </div>
      ))}
    </div>
  );
};

export default TimePicker;
