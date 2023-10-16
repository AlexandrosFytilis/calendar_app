import React, { useContext } from "react";
import styled from "styled-components";
import { Months } from "./Months.tsx";
import { Days } from "./Days.tsx";

export const Content = () => {
  type MonthsTypes = "January" | "Febuary" |"March" | "April" | "May" | "June"| "July" | "August" | "September" | "October" | "November" | "December"
  type MonthToDays = { [k in MonthsTypes]: number}
  type DaysOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"

  const date = new Date();
  const today: number = date.getDate();
  const thisYear = date.getFullYear();
  const thisMonth = date.getMonth() + 1;
  const MONTHS: MonthToDays = { "January": 31, "Febuary": 28, "March": 31, "April": 30, "May": 31, "June": 30, "July": 31, "August": 31, "September": 30, "October": 31, "November": 30, "December": 31 }
  const months: Array<MonthsTypes> = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const days: Array<DaysOfWeek> = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  return (
    <Wrapper>
      <Months thisMonth={thisMonth} today={today} thisYear={thisYear} months={months} days={days} MONTHS={MONTHS} />
      <Days thisMonth={thisMonth} today={today} thisYear={thisYear} months={months} days={days} MONTHS={MONTHS} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 90vh;

  //padding: 0 10px 0 10px;
`;