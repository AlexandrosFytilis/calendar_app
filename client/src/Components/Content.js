import React from "react";
import styled from "styled-components";
import { Months } from "./Months";
import { Days } from "./Days";

export const Content = () => {

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const MONTHS = {"January": 31, "Febuary": 28, "March": 31, "April": 30, "May": 31, "June": 30, "Jully": 31, "August": 31, "September": 30, "October": 31, "November": 30, "December": 31}
const months = ["January", "Febuary", "March", "April", "May", "June", "Jully", "August", "September", "October", "November", "December"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (
        <Wrapper> 
            <Months date={date} day={day} month={month} year={year} months={months} days={days} MONTHS={MONTHS}/>
            <Days date={date} day={day} month={month} year={year} months={months} days={days} MONTHS={MONTHS}/> 
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