import React, { useState } from "react";
import { memo } from "react";
import { Calendar, defaultCalendarStrings, ICalendarStyles } from "@fluentui/react/lib/Calendar";
import styles from "./styles.module.css";

type DateTypes = {
  setSelectedDate: (selectedDate: Date | undefined) => void,
  selectedDate: Date | undefined,
  minDate?: Date,
  setSameDay?: (sameDay: boolean) => void,
  minMax: (Date | undefined)[],
  toggle: "start" | "end",
}

const gridStyle: Partial<ICalendarStyles> = {
  root: {
    table: {
      gridGap: "20px",
    }
  }
};

const notSelectedDateStyle = {
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
  }
};

const DatePicker = ({ setSelectedDate, selectedDate, minDate, setSameDay, minMax, toggle }: DateTypes) => {
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
      calendarMonthProps={{
        styles: () => ({
          root: {
            width: "100%",
          }
        })
      }}
      calendarDayProps={{
        styles: () => ({
          root: {
            width: "100%",
          },
          table: {
            width: "100%",
            "tbody": {
              display: "grid",
              gap: "8px 0px",
              disableShrink: "true",
              width: "100%",
              "tr": {
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                "th": {
                  display: "grid",
                  alignItems: "center",
                }
              },
            },
          },
          dayCell: {
            fontSize: 14,
            lineHeight: 14,
            width: "100%",
            backgroundColor: "transparent",
            "&:hover": {
              button: {
                backgroundColor: "#DBF0FF",
                borderRadius: "50%",
              }
            },
          },
          dayButton: {
            fontSize: 14,
            height: "100%",
            width: "28px",
          },
          dayIsToday: {
            backgroundColor: "#fff",
            color: "#343434",
            fontWeight: 400,
            border: "1px solid #0078d4",
            borderRadius: "50%",
            "&:hover": {
              backgroundColor: "#fff",
            },
            button: {
              backgroundColor: "transparent",
            },
          },
          daySelected: {
            ...notSelectedDateStyle,
            ...(selectedDate && { ...selectedDateStyle })
          },
        }),

        customDayCellRef: (
          element: HTMLElement,
          date: Date,
        ) => {
          if (element) {

            // Selected dates show in both calendars
            if ([minMax[0]?.getTime(), minMax[1]?.getTime()].includes(date.getTime())) {
              element.classList.add("daySelected-146", ".daySelected-124", "ms-CalendarDay-daySelected");
            } else element.classList.remove("daySelected-146", ".daySelected-124", "ms-CalendarDay-daySelected");

            // Hover range
            if (dateHover) {
              if (toggle === "start" && minMax[1]) {
                if (date.getTime() < minMax[1].getTime() && date.getTime() > dateHover.getTime()) {
                  element.classList.add(styles.HoverRangeButton);
                  element.classList.remove(styles.HoverRangeButtonRight);
                } else if (date.getTime() < minMax[1].getTime() && date.getTime() === dateHover.getTime()) {
                  element.classList.add(styles.HoverRangeButtonRight);
                } else element.classList.remove(styles.HoverRangeButton, styles.HoverRangeButtonRight);
              }
              if (toggle === "end" && minMax[0]) {
                if (date.getTime() > minMax[0].getTime() && date.getTime() < dateHover.getTime()) {
                  element.classList.add(styles.HoverRangeButton);
                  element.classList.remove(styles.HoverRangeButtonLeft);
                } else if (date.getTime() > minMax[0].getTime() && date.getTime() === dateHover.getTime()) {
                  element.classList.add(styles.HoverRangeButtonLeft);
                } else element.classList.remove(styles.HoverRangeButton, styles.HoverRangeButtonLeft);
              }
            } else element.classList.remove(styles.HoverRangeButton);

            // Select range
            if (minMax[0] && minMax[1] && minMax[0].getTime() !== minMax[1].getTime()) {
              if (date.getTime() >= minMax[0].getTime() && date.getTime() <= minMax[1].getTime()) {
                if (minMax[0].getTime() === date.getTime()) {
                  element.classList.add(styles.RangeButtonRight);
                } else if (minMax[1].getTime() === date.getTime()) {
                  element.classList.add(styles.RangeButtonLeft);
                } else {
                  element.classList.remove(styles.ButtonLeft)
                  element.classList.add(styles.RangeButton)
                };
              } else element.classList.remove(styles.RangeButton);
            } else element.classList.remove(styles.RangeButton);

            element.onmouseenter = () => {
              setDateHover(date)
            };
          }
        },
      }}
    />
  );
};

export default memo(DatePicker);
