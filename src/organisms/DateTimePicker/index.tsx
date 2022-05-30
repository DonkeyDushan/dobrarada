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

  const [toggleStartEnd, setToggleStartEnd] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [startTime, setStartTime] = useState<number>(0);
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [endTime, setEndTime] = useState<number>(DAY_IN_MS - MIN_IN_MS);

  useEffect(() => {
    if (!endDate) setEndDate(startDate)
  }, [startDate])

  return (
    <div>
      <ToggleButton
        setToggleStartEnd={setToggleStartEnd}
        start
        date={startDate ? `${startDate.toLocaleDateString()} ${msToTime(startTime)}` : ""}
      />
      <ToggleButton
        setToggleStartEnd={setToggleStartEnd}
        start={false}
        date={startDate || endDate ? `${endDate?.toLocaleDateString()} ${msToTime(endTime)}` : ""}
      />
      <div className={styles.PickersWrapper} >
        {toggleStartEnd
        ? <DatePicker setDate={setStartDate} date={startDate} />
        : <DatePicker setDate={setEndDate} date={endDate} />}
        <TimePicker setTime={toggleStartEnd ? setStartTime : setEndTime} time={toggleStartEnd ? startTime : endTime} />
      </div>
    </div>
  );
};

export default DateTimePicker;
