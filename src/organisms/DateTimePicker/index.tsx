import React, { useState } from "react";
import styles from "./styles.module.css";

import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import msToTime from "../../utils/msToTime";
import { useEffect } from "react";
import ToggleButton from "./ToggleButton";

const DateTimePicker = () => {
  const DAY_IN_MS = 86400000;
  const MIN_IN_MS = 60000;
  const todaysDate= new Date((new Date()).setHours(0, 0, 0, 0));

  const [toggle, setToggle] = useState<"start" | "end">("start");
  const [sameDay, setSameDay] = useState(true);
  const [startDate, setStartDate] = useState<Date | undefined>(todaysDate);
  const [startTime, setStartTime] = useState<number>(0);
  const [endDate, setEndDate] = useState<Date | undefined>(todaysDate);
  const [endTime, setEndTime] = useState<number>(DAY_IN_MS - MIN_IN_MS);

  useEffect(() => {
    if (startDate && (sameDay || (endDate && startDate?.getTime() > endDate?.getTime()))) setEndDate(startDate);
    if (startDate?.getTime() === endDate?.getTime() && endTime < startTime) setEndTime(DAY_IN_MS - MIN_IN_MS);
  }, [startDate, endDate, startTime])

  return (
    <div className="w-[500px] flex flex-col items-center m-[150px] p-[20px] border-solid border-[1px] border-gray-border">
      <ToggleButton
        toggle={toggle}
        setToggle={setToggle}
        startDate={startDate ? `${startDate.toLocaleDateString()} ${msToTime(startTime)}` : "Zadejte"}
        endDate={startDate || endDate ? `${endDate?.toLocaleDateString()} ${msToTime(endTime)}` : "Zadejte"}
      />
      {
        toggle === "start"
          ?
          <div className="grid grid-cols-2 w-full">
            <DatePicker setSelectedDate={setStartDate} selectedDate={startDate} minMax={[startDate, endDate]} />
            <TimePicker start setTime={setStartTime} time={startTime} />
          </div>
          :
          <div className="grid grid-cols-2 w-full">
            <DatePicker setSelectedDate={setEndDate} selectedDate={endDate} minDate={startDate} setSameDay={setSameDay} minMax={[startDate, endDate]} />
            <TimePicker setTime={setEndTime} time={endTime} minTime={startDate?.getTime() === endDate?.getTime() ? startTime : undefined} />
          </div>
      }
    </div>
  );
};

export default DateTimePicker;
