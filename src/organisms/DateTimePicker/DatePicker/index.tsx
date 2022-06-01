import React from "react";
import { Calendar, defaultCalendarStrings, ICalendarDayProps, ICalendarDayStyles, ICalendarDayGridStyles } from "@fluentui/react/lib/Calendar";
import styles from "./styles.module.css";
import classNames from "classnames";

type DateTypes = {
  setSelectedDate: (selectedDate: Date | undefined) => void,
  selectedDate: Date | undefined,
  minDate?: Date,
  setSameDay?: (sameDay: boolean) => void,
  minMax: (Date | undefined)[],
}

const DatePicker = ({ setSelectedDate, selectedDate, minDate, setSameDay, minMax }: DateTypes) => {
  return (
    <Calendar
      showMonthPickerAsOverlay
      highlightSelectedMonth
      showGoToToday={false}
      onSelectDate={(value) => {
        setSelectedDate(value);
        if (setSameDay) setSameDay(false);
      }}
      value={selectedDate}
      strings={defaultCalendarStrings}
      minDate={minDate}
      calendarDayProps={{
        customDayCellRef: (
          element: HTMLElement,
          date: Date,
        ) => {
          if (element && minMax[0] && minMax[1]) {
            if (date.getTime() >= minMax[0].getTime() && date.getTime() <= minMax[1].getTime()) {
              element.classList.add(styles.DayButton);
            } else element.classList.remove(styles.DayButton);
          }
        },
      }}
    />
  );
};

export default DatePicker;
