/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, { useState, memo } from "react";
import { Calendar, defaultCalendarStrings, ICalendarStyles } from "@fluentui/react/lib/Calendar";
import styles from "./styles.module.css";

type DateTypes = {
  setSelectedDate: (selectedDate: Date | undefined) => void,
  selectedDate: Date | undefined,
  minDate?: Date,
  setSameDay?: (sameDay: boolean) => void,
  sameDay: boolean,
  minMax: (Date | undefined)[],
  toggle: "start" | "end",
};

const gridStyle: Partial<ICalendarStyles> = {
  root: {
    table: {
      gridGap: "20px",
    },
  },
};

/* const notSelectedDateStyle = {
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&::after": {
    content: "none !important",
  },
};

const selectedDateStyle = {
  "&::after": {
    content: "",
    border: "none",
  },
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: "#0078d4 !important",
    borderRadius: "50% !important",
    outline: "2px solid #0078d4",
    outlineOffset: "-1px",
    height: "26px",
    width: "26px",
    color: "#fff",
    fontWeight: 500,
  },
}; */

const DatePicker = ({
  setSelectedDate, selectedDate, minDate, setSameDay, sameDay, minMax, toggle,
}: DateTypes) => {
  const [dateHover, setDateHover] = useState<Date | undefined>();

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
      maxDate={new Date(Date.now())}
      styles={gridStyle}

      calendarDayProps={{
        className: styles.calendar,
        styles: {
          root: {
            width: "100%",
          },
          daySelected: styles.selected,
          dayIsToday: styles.today,
        },

        customDayCellRef: (
          element: HTMLElement,
          date: Date,
        ) => {
          if (element) {

            // Selected dates show in both calendars
            if ([minMax[0]?.getTime(), minMax[1]?.getTime()].includes(date.getTime())) {
              element.classList.add(styles.selected);
            } else element.classList.remove(styles.selected);

            // Hover range
            if (dateHover) {
              // Before
              if (toggle === "start" && !sameDay && minMax[1] && date.getTime() < minMax[1].getTime()) {
                element.classList.add(styles.hoverRangeButton);
                if (date.getTime() > dateHover.getTime()) {
                  element.classList.remove(styles.hoverRight);
                } else if (date.getTime() === dateHover.getTime()) {
                  element.classList.add(styles.hoverRight);
                } else element.classList.remove(styles.hoverRangeButton, styles.hoverRight);
              }
              // After
              else if (toggle === "end" && minMax[0] && date.getTime() > minMax[0].getTime()) {
                element.classList.add(styles.hoverRangeButton);
                if (date.getTime() < dateHover.getTime()) {
                  element.classList.remove(styles.hoverLeft);
                } else if (date.getTime() === dateHover.getTime()) {
                  element.classList.add(styles.hoverLeft);
                } else element.classList.remove(styles.hoverRangeButton, styles.hoverLeft);
              } else element.classList.remove(styles.hoverRangeButton, styles.hoverRight, styles.hoverLeft);
            } else element.classList.remove(styles.hoverRangeButton, styles.hoverRight, styles.hoverLeft);

            // Select range
            if (!sameDay && minMax[0] && minMax[1] && minMax[0].getTime() !== minMax[1].getTime()) {
              if (date.getTime() >= minMax[0].getTime() && date.getTime() <= minMax[1].getTime()) {
                if (minMax[0].getTime() === date.getTime()) {
                  element.classList.add(styles.rangeButton, styles.right);
                } else if (minMax[1].getTime() === date.getTime()) {
                  element.classList.add(styles.rangeButton, styles.left);
                } else {
                  element.classList.remove(styles.left, styles.right);
                  element.classList.add(styles.rangeButton);
                }
              } else element.classList.remove(styles.rangeButton);
            } else element.classList.remove(styles.rangeButton);

            element.onmouseenter = () => {
              setDateHover(date);
            };
          }
        },
      }}
    />
  );
};

export default memo(DatePicker);
