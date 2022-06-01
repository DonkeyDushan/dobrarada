import React from "react";
import msToTime from "../../../utils/msToTime";
import generateTimeList from "../../../utils/timeList";
import classNames from "classnames";

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
          className={classNames("flex justify-center align-middle py-2 text-sm text-gray-500 hover:bg-gray-100 disabled:text-gray-disabled disabled:bg-white",
            { "ring-1 ring-gray-border bg-gray-200 hover:bg-gray-200": num === time })}
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
