import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import msToTime from "../../utils/msToTime";

import ToggleButton from "./ToggleButton";

const DateTimePicker = () => {
  const DAY_IN_MS = 86400000;
  const MIN_IN_MS = 60000;

  const [toggle, setToggle] = useState<"start" | "end">("start");
  const [sameDay, setSameDay] = useState(true);
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [startTime, setStartTime] = useState<number>(0);
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [endTime, setEndTime] = useState<number>(DAY_IN_MS - MIN_IN_MS);

  useEffect(() => {
    if (startDate && (sameDay || (endDate && startDate?.getTime() > endDate?.getTime()))) setEndDate(startDate);
    if (startDate?.getTime() === endDate?.getTime() && endTime < startTime) setEndTime(DAY_IN_MS - MIN_IN_MS);
  }, [startDate, endDate, startTime]);

  const restoreDefault = () => {
    setSameDay(true);
    setToggle("start");
    setStartDate(undefined);
    setEndDate(undefined);
    setStartTime(0);
    setEndTime(DAY_IN_MS - MIN_IN_MS);
  };

  return (
    <div className="w-fit flex flex-col items-center m-[150px] p-4 shadow-md">
      <ToggleButton
        toggle={toggle}
        setToggle={setToggle}
        startDate={startDate ? `${startDate.toLocaleDateString()} ${msToTime(startTime)}` : "Vyberte začátek"}
        endDate={startDate || endDate ? `${endDate?.toLocaleDateString()} ${msToTime(endTime)}` : "Vyberte konec"}
        restoreDefault={restoreDefault}
      />
      {
        toggle === "start"
          ? (
            <div className="flex gap-6 w-full">
              <DatePicker setSelectedDate={setStartDate} selectedDate={startDate || new Date(Date.now())} sameDay={sameDay} minMax={[startDate, endDate]} toggle={toggle} />
              <TimePicker key="startTimePicker" setTime={setStartTime} time={startTime} />
            </div>
          )
          : (
            <div className="flex gap-6 w-full">
              <DatePicker setSelectedDate={setEndDate} selectedDate={endDate || new Date(Date.now())} minDate={startDate} sameDay={sameDay} setSameDay={setSameDay} minMax={[startDate, endDate]} toggle={toggle} />
              <TimePicker key="endTimePicker" setTime={setEndTime} time={endTime} minTime={startDate?.getTime() === endDate?.getTime() ? startTime : undefined} />
            </div>
          )
      }
    </div>
  );
};

export default DateTimePicker;
