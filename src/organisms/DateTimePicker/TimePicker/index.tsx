import React from "react";
import msToTime from "../../../utils/msToTime";
import styles from "./styles.module.css";
import generateTimeList from "../../../utils/timeList";

type TimeTypes = {
  setTime: (time: number) => void,
  time: number,
  start?: boolean,
  minTime?: number,
}

const TimePicker = ({ setTime, time, start, minTime }: TimeTypes) => {
  const MIN_IN_MS = 60000;

  return (
    <div className="grid grid-cols-4 gap-1 px-[10px] py-px my-[22px] h-[196px] overflow-auto">
      {generateTimeList(30).map((num) => (
        <button
          className="py-2 px-2 text-sm text-text-color hover:bg-light-gray focus:ring-1 focus:ring-dark-gray disabled:text-gray disabled:bg-main-white"
          onClick={() => setTime(num)}
          key={num}
          disabled={minTime ? num < (minTime + MIN_IN_MS * 30) : false}
        >
          {msToTime(num)}
        </button>
      ))}
    </div>
  );
};

export default TimePicker;
