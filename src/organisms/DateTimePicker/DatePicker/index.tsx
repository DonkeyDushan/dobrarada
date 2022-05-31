import React from "react";
import { Calendar, defaultCalendarStrings } from "@fluentui/react/lib/Calendar";
import styles from "./styles.module.css";

type DateTypes = {
  setDate: (date: Date | undefined) => void,
  date: Date | undefined,
  minDate?: Date,
  setSameDay?: (sameDay: boolean) => void,
}

const DatePicker = ({ setDate, date, minDate, setSameDay }: DateTypes) => {
  return (
    <Calendar
      showMonthPickerAsOverlay
      highlightSelectedMonth
      showGoToToday={false}
      onSelectDate={(value)=> {
        setDate(value);
        if (setSameDay) setSameDay(false);
      }}
      value={date}
      strings={defaultCalendarStrings}
      minDate={minDate}
      styles={styles.Calendar}
    />
  );
};

export default DatePicker;
