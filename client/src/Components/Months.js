import React, { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "./CurrentDateContext";

export const Months = ({ thisMonth, today, month, thisYear, year, months, days, MONTHS }) => {
    const { setMonth, setYear } = useContext(DateContext);

    return (
        <Wrapper>
            <Month>
                <button onClick={() => {
                    if (month === 1) {
                        setMonth(12)
                        setYear(year - 1)
                    } else {
                        setMonth(month - 1)
                    }
                }
                }>Previous</button>
                {months[month - 1]}{year}
                <button onClick={() => {
                    if (month === 12) {
                        setMonth(1)
                        setYear(year + 1)
                    } else {
                        setMonth(month + 1)
                    }
                }
                }>NEXT</button>
                {month === thisMonth ? (
                    <></>
                ) : (
                    <button onClick={() => {
                        setMonth(thisMonth)
                        setYear(thisYear)
                    }
                    }>RETURN</button>
                )}
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