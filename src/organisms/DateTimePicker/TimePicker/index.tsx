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
    <div className="w-64 h-min max-h-[14rem] mt-[2.125rem] grid grid-cols-4 gap-y-4 gap-x-3.5 px-px overflow-auto pr-3">
      {generateTimeList(30).map((num) => (
        <button
          className={classNames("flex justify-center align-middle rounded-full py-0.5 text-sm text-gray-500",
            { "hidden": minTime && num < (minTime + MIN_IN_MS * 30)},
            { "bg-blue-main hover:bg-blue-main text-white fonnt-medium": num === time },
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
