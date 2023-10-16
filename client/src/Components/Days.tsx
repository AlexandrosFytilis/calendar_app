import React, { useContext, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../colors.tsx";
import { DateDataType } from "../CalendarProps.tsx";
import { DateContext, DateContextProps } from "./CurrentDateContext.tsx";

const weeks = [1, 2, 3, 4, 5];

export const Days = ({ thisMonth, today, thisYear, months, days, MONTHS }: DateDataType) => {
    const { month, year }: DateContextProps = useContext(DateContext);
    

    let firstDayOfMonth = new Date(thisYear, month - 1, 1).toString().substring(0, 3);
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
    let largeMonth = false;

    console.log(MONTHS[CURRENTMONTH])

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

                    if (week === 1 && day === firstDayOfMonth && monthStarted === false) {
                        dates = 1;
                        monthStarted = true;
                        CURRENTMONTH = months[month - 1];

                        if (day === "Saturday" && MONTHS[CURRENTMONTH] === 30) {
                            largeMonth = true
                        } else if (day === "Saturday" && MONTHS[CURRENTMONTH] === 31) {
                            largeMonth = true
                        } else if (day === "Friday" && MONTHS[CURRENTMONTH] === 31) {
                            largeMonth = true
                        } else {
                            largeMonth = false
                        }
                    }

                    if (largeMonth === true && weeks.length === 5) {
                        weeks.push(6)
                    }

                    if (largeMonth === false && weeks.length === 6) {
                        weeks.pop()
                    }

                    if (dates === currentMonth && monthStarted === true) {
                        monthEndend = true
                    }

                    if (dates === today && thisMonth === month && monthStarted === true && year === thisYear) {
                        return (
                            <Today>
                                <Day>{dates}</Day>
                                <Content> {`${day}`}&nbsp;{`${dates}`}&nbsp;{CURRENTMONTH}&nbsp;{thisYear}</Content>
                            </Today>
                        )
                    }

                    if (monthStarted === true && nextMonthStarted === false) {
                        return (
                            <DayOfTheMonth>
                                <Day>{dates}</Day>
                                <Content> {`${day}`}&nbsp;{`${dates}`}&nbsp;{CURRENTMONTH}&nbsp;{thisYear}</Content>
                            </DayOfTheMonth>
                        )
                    }

                    return (
                        <DayOfOtherMonths>
                            <Day>{dates}</Day>
                            <Content> {`${day}`}&nbsp;{`${dates}`}&nbsp;{CURRENTMONTH}&nbsp;{thisYear}</Content>
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
