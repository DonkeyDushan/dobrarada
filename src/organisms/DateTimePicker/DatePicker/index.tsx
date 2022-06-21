/* eslint-disable no-param-reassign */
/* eslint-disable react/require-default-props */
import React, { useState, memo, useEffect } from "react";
import { Calendar, defaultCalendarStrings, ICalendarStyles } from "@fluentui/react/lib/Calendar";
import styles from "./styles.module.css";
import { registerIcons } from '@fluentui/react/lib/Styling';
import { ChevronUp16Regular, ChevronDown16Regular } from "@fluentui/react-icons"

registerIcons({
  icons: {
    ChevronUp: <ChevronUp16Regular />,
    ChevronDown: <ChevronDown16Regular />
  }
});

type DateTypes = {
  setSelectedDate: (selectedDate: Date | undefined) => void,
  selectedDate: Date | undefined,
  minDate?: Date,
  setSameDay?: (sameDay: boolean) => void,
  sameDay: boolean,
  minMax: (Date | undefined)[],
  toggle: "start" | "end",
};

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
      navigationIcons={{
        leftNavigation: "ChevronUp",
        rightNavigation: "ChevronDown",
      }}
      calendarMonthProps={{
        styles: {
          disabled: { textDecoration: "line-through" },
        }
      }}
      calendarDayProps={{
        styles: {
          root: styles.calendar,
          daySelected: styles.selected,
          dayIsToday: styles.today,
          dayOutsideBounds: styles.disabled,
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

            // Select range
            if (!sameDay && minMax[0] && minMax[1] && minMax[0].getTime() !== minMax[1].getTime()) {
              if (date.getTime() >= minMax[0].getTime() && date.getTime() <= minMax[1].getTime()) {
                element.classList.add(styles.rangeButton);
                if (minMax[0].getTime() === date.getTime()) {
                  element.classList.add(styles.right);
                } else if (minMax[1].getTime() === date.getTime()) {
                  element.classList.add(styles.left);
                } else {
                  element.classList.remove(styles.left, styles.right);
                }
              } else element.classList.remove(styles.rangeButton);
            } else element.classList.remove(styles.rangeButton);

            // Hover range
            if (dateHover) {
              if (toggle === "start" && minMax[1] && !sameDay // start
                && date.getTime() >= dateHover.getTime() && date.getTime() <= minMax[1].getTime() // hover range for start
                && (!minMax[0] || minMax[0] && dateHover.getTime() < minMax[0].getTime()) // with selected range
                ) {
                element.classList.add(styles.hoverRangeButton);
                if (date.getTime() === dateHover.getTime()) {
                  element.classList.add(styles.hoverRight);
                  element.classList.remove(styles.hoverLeft);
                } else if (date.getTime() === minMax[1].getTime()) {
                  element.classList.add(styles.hoverLeft);
                  element.classList.remove(styles.hoverRight);
                } else element.classList.remove(styles.hoverRight, styles.hoverLeft);
              } else element.classList.remove(styles.hoverRangeButton, styles.hoverRight, styles.hoverLeft);

              if (toggle === "end" && minMax[0] // end
                && date.getTime() <= dateHover.getTime() && date.getTime() >= minMax[0].getTime() // hover range for end
                && (!minMax[1] || minMax[1] && dateHover.getTime() > minMax[1].getTime()) // with selected range
                ) {
                element.classList.add(styles.hoverRangeButton);
                if (date.getTime() === dateHover.getTime()) {
                  element.classList.add(styles.hoverLeft);
                  element.classList.remove(styles.hoverRight);
                } else if (date.getTime() === minMax[0].getTime()) {
                  element.classList.add(styles.hoverRight);
                  element.classList.remove(styles.hoverLeft);
                } else element.classList.remove(styles.hoverRight, styles.hoverLeft);
              }
            } else element.classList.remove(styles.hoverRangeButton, styles.hoverRight, styles.hoverLeft);

            element.onmouseenter = () => {
              setDateHover(date);
            };
            element.onmouseleave = () => {
              setDateHover(undefined);
            };
          }
        },
      }}
    />
  );
};

export default memo(DatePicker);
