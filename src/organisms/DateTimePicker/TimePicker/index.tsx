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
    <div className="grid grid-cols-4 gap-2 px-[10px] py-px my-[22px] h-min max-h-[235px] overflow-auto">
      {generateTimeList(30).map((num) => (
        <button
          className={classNames("flex justify-center align-middle rounded-full ring-0 py-2 text-sm leading-none text-gray-500",
            { "ring-1 ring-gray-border bg-gray-200 hover:bg-gray-200": num === time },
            { "hidden": minTime && num < (minTime + MIN_IN_MS * 30)},
            { "bg-main-blue hover:bg-main-blue text-white fonnt-medium": num === time },
            { "hover:bg-[#DBF0FF]": num !== time },
            )}
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
