import React, { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "./CurrentDateContext.tsx";
import { COLORS } from "../colors.tsx";

export const Months = ({ thisMonth, today, month, thisYear, year, months, days, MONTHS }) => {
    const { setMonth, setYear } = useContext(DateContext);

    return (
        <Wrapper>
            <Month>
                <SwitchMonthButton onClick={() => {
                    if (month === 1) {
                        setMonth(12)
                        setYear(year - 1)
                    } else {
                        setMonth(month - 1)
                    }
                }
                }>{`<`}</SwitchMonthButton>
                <CalendarMonth>{months[month - 1]}&nbsp;{year}</CalendarMonth>
                <SwitchMonthButton onClick={() => {
                    if (month === 12) {
                        setMonth(1)
                        setYear(year + 1)
                    } else {
                        setMonth(month + 1)
                    }
                }
                }>{`>`}</SwitchMonthButton>
                
            </Month>
            <>{month === thisMonth ? (
                    <Return></Return>
                ) : (
                    <Return>
                        <ReturnButton onClick={() => {
                            setMonth(thisMonth)
                            setYear(thisYear)
                        }
                        }>RETURN</ReturnButton>
                    </Return>
                    
                )}</>
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
`;

const Month = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 70%;
    background: ${COLORS.tertiaryColor};
`
const CalendarMonth = styled.h2`
    width: 12%;
`

const Return = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 10%;

    background: ${COLORS.tertiaryColor};
`

const ReturnButton = styled.button`
    margin-bottom: 20px;

    font-size: 20px;
    font-weight: bold;
`

const SwitchMonthButton = styled.button`
    
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
    
    background: ${COLORS.secondaryColor};

    font-weight: bold;

    width: 100%;
    height: 100%;

    border: solid 2px black ;
`