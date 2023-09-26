import React from "react";
import styled from "styled-components";

export const Months = ({ day, month, year, months, days, MONTHS}) => {
    return (
        <Wrapper> 
            <Month>
                {months[month -1]}
            </Month>
            <Week>
                {days.map((day) => <Day>{day}</Day>)}
            </Week>
        </Wrapper>
    );
  };
  
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10vh;
  background-color: gray;
`;

const Month = styled.div`
    display: flex;

    height: 80%;
    background: pink;
`

const Week = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    height: 20%;
`

const Day = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: orange;

    width: 100%;
    height: 100%;

    border: solid 2px black ;
`