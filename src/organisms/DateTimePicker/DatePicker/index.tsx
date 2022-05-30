import React from "react";
import { Calendar, defaultCalendarStrings } from "@fluentui/react/lib/Calendar";

type DateTypes = {
  setDate:(date: Date | undefined) => void,
  date: Date | undefined,
}

const DatePicker = ({ setDate, date }: DateTypes) => {
  const onSelectDate = React.useCallback((date, dateRangeArray): void => {
    setDate(date);
  }, []);

  return (
    <Calendar
      showMonthPickerAsOverlay
      highlightSelectedMonth
      showGoToToday={false}
      onSelectDate={onSelectDate}
      value={date}
      strings={defaultCalendarStrings}
    />
  );
};

export default DatePicker;
