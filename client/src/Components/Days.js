import React, { useState } from "react";
import styled from "styled-components";

const weeks = [0, 1, 2, 3, 4];

export const Days = ({ thisMonth, date, today, month, year, months, days, MONTHS }) => {
    let firstDayOfMonth = new Date(year, month - 1, 1).toString().substring(0, 3);
    let difference = 0;

    days.forEach((weekDay, index) => {
        if (weekDay.substring(0, 3) === firstDayOfMonth) {
            firstDayOfMonth = weekDay;
            difference = index - 1;
        }
    });

    let dates = 0;
    let monthStarted = false;
    let monthEndend = false;
    let nextMonthStarted = false;
    let previousMonth = MONTHS[months[month - 2]];
    let currentMonth = MONTHS[months[month - 1]];
    let CURRENTMONTH = months[month - 1];

    console.log(thisMonth)
    console.log(month)

    return (
        <Wrapper>
            {weeks.map((week) => {
                return days.map((day) => {
                    if (monthStarted === true) {
                        dates++;
                    } else {
                        dates = previousMonth - difference
                        difference--
                        CURRENTMONTH = months[month - 2];
                    }

                    if (monthEndend === true && nextMonthStarted === false) {
                        dates = 1
                        nextMonthStarted = true
                        CURRENTMONTH = months[month];
                    }

                    if (week === 0 && day === firstDayOfMonth && monthStarted === false) {
                        dates = 1;
                        monthStarted = true;
                        CURRENTMONTH = months[month - 1];
                    }

                    if (dates === currentMonth && monthStarted === true) {
                        monthEndend = true
                    }

                    if (dates === today && thisMonth === month) {
                        return (
                            <Today>
                                {`${day}`}&nbsp;{`${dates}`}&nbsp;{CURRENTMONTH}&nbsp;{year}
                            </Today>
                        )
                    }

                    if ( monthStarted === true && nextMonthStarted === false) {
                        return (
                            <DayOfTheMonth>
                                {`${day}`}&nbsp;{`${dates}`}&nbsp;{CURRENTMONTH}&nbsp;{year}
                            </DayOfTheMonth>
                        )
                    }

                    return (
                        <DayOfOtherMonths>
                            {`${day}`}&nbsp;{`${dates}`}&nbsp;{CURRENTMONTH}&nbsp;{year}
                        </DayOfOtherMonths>
                    );
                });
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);

  height: 100%;
  width: 100%;
`;

const DayOfOtherMonths = styled.div`
  display: flex;

  height: 100%;
  width: 100%;

  padding: 10px;

  background: gray;

  border: solid 2px black;
`;

const DayOfTheMonth = styled.div`
  display: flex;

  height: 100%;
  width: 100%;

  padding: 10px;

  background: cyan;

  border: solid 2px black;
`;

const Today = styled.div`
  display: flex;

  height: 100%;
  width: 100%;

  padding: 10px;

  background: yellow;

  border: solid 2px black;
`;
