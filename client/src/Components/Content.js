import React, { useContext } from "react";
import styled from "styled-components";
import { Months } from "./Months";
import { Days } from "./Days";
import { DateContext } from "./CurrentDateContext";


export const Content = () => {

  const { month, year } = useContext(DateContext);

  const date = new Date();

  const today = date.getDate();
  const thisYear = date.getFullYear();
  const thisMonth = date.getMonth() + 1;
  const MONTHS = { "January": 31, "Febuary": 28, "March": 31, "April": 30, "May": 31, "June": 30, "July": 31, "August": 31, "September": 30, "October": 31, "November": 30, "December": 31 }
  const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  return (
    <Wrapper>
      <Months thisMonth={thisMonth} date={date} today={today} month={month} thisYear={thisYear} year={year} months={months} days={days} MONTHS={MONTHS} />
      <Days thisMonth={thisMonth} date={date} today={today} month={month} thisYear={thisYear} year={year} months={months} days={days} MONTHS={MONTHS} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: green;

  height: 90vh;

  //padding: 0 10px 0 10px;
`;