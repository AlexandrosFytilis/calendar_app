import React, { useContext } from "react";
import styled from "styled-components";
import { COLORS } from "../colors.tsx";
import { DateDataType } from "../CalendarProps.tsx";
import { DateContext, DateContextProps } from "./CurrentDateContext.tsx";

const weeks = [1, 2, 3, 4, 5];

export const Days = ({ thisMonth, today, thisYear, months, days, MONTHS }: DateDataType) => {
    const { month, year }: DateContextProps = useContext(DateContext);
    
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
    let endOfTheYear = false;
    let nextMonthStarted = false;
    let previousMonth = MONTHS[months[month - 2]];
    let currentMonth = MONTHS[months[month - 1]];
    let CURRENTMONTH = months[month - 1];
    let largeMonth = false;

    if (firstDayOfMonth === "Saturday" && MONTHS[CURRENTMONTH] === 30) {
        largeMonth = true
    } else if (firstDayOfMonth === "Saturday" && MONTHS[CURRENTMONTH] === 31) {
        largeMonth = true
    } else if (firstDayOfMonth === "Friday" && MONTHS[CURRENTMONTH] === 31) {
        largeMonth = true
    } else {
        largeMonth = false
    }

    if (largeMonth === true && weeks.length === 5) {
            weeks.push(6)
    }
    if (largeMonth === false && weeks.length === 6) {
        weeks.pop()
    }
    
    if (CURRENTMONTH === "January") {
        previousMonth = 12
    }

    return (
        <Wrapper data-testid="Days-grid">
            {weeks.map((week) => {
                return days.map((day) => {
                    if (CURRENTMONTH === months[11]) {
                        endOfTheYear = true
                    } else {
                        endOfTheYear = false
                    }

                    if (monthStarted === true) {
                        dates++;
                    } else {
                        if (CURRENTMONTH === "January") {
                            dates = previousMonth - difference
                            difference--
                            CURRENTMONTH = "December";
                        } else {
                            dates = previousMonth - difference
                            difference--
                            CURRENTMONTH = months[month - 2]; 
                        }
                    }

                    if (monthEndend === true && nextMonthStarted === false && endOfTheYear === false) {
                        dates = 1
                        nextMonthStarted = true
                        CURRENTMONTH = months[month];
                    }

                    if (monthEndend === true && nextMonthStarted === false && endOfTheYear === true) {
                        dates = 1
                        nextMonthStarted = true
                        CURRENTMONTH = months[0];
                    }

                    if (week === 1 && day === firstDayOfMonth && monthStarted === false) {
                        dates = 1;
                        monthStarted = true;
                        CURRENTMONTH = months[month - 1];
                    }

                    if (dates === currentMonth && monthStarted === true) {
                        monthEndend = true
                    }

                    if (dates === today && thisMonth === month && monthStarted === true && year === thisYear && monthEndend === false) {
                        return (
                            <Today key={day}>
                                <Day data-testid="today">{dates}</Day>
                                <Content data-testid={`week-${week}-${dates}`}> {`${day}`}&nbsp;{`${dates}`}&nbsp;{CURRENTMONTH}&nbsp;{year}&nbsp;{week}</Content>
                            </Today>
                        )
                    }

                    if (monthStarted === true && nextMonthStarted === false) {
                        return (
                            <DayOfTheMonth data-testid="day-of-the-month" key={day}>
                                <Day>{dates}</Day>
                                <Content data-testid={`week-${week}-${dates}`}> {`${day}`}&nbsp;{`${dates}`}&nbsp;{CURRENTMONTH}&nbsp;{year}&nbsp;{week}</Content>
                            </DayOfTheMonth>
                        )
                    }

                    return (
                        <DayOfOtherMonths data-testid={`day-of-other-month-${dates}`} key={day}>
                            <Day>{dates}</Day>
                            <Content data-testid={`week-${week}-${dates}`}> {`${day}`}&nbsp;{`${dates}`}&nbsp;{CURRENTMONTH}&nbsp;{year}&nbsp;{week}</Content>
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
  //grid-template-rows: repeat(5, 1fr);

  height: 100%;
  width: 100%;
`;

const DayOfOtherMonths = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  height: 100%;
  width: 100%;

  background: ${COLORS.disabledColor};

  border: solid 2px black;
`;

const DayOfTheMonth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  height: 100%;
  width: 100%;

  background: ${COLORS.basicColor};

  border: solid 2px black;
`;

const Today = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  height: 100%;
  width: 100%;

  background: ${COLORS.activeColor};

  border: solid 2px black;
`;

const Day = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-right: solid black 2px;

    font-weight: bold;

    width: 15%;
    height: 15%;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;

    padding: 10px;

    border-top: solid 2px black;
`
