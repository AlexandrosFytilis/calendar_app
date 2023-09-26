import React from "react";
import styled from "styled-components";

const weeks = [1, 2, 3, 4, 5]

export const Days = ({ day, month, year, months, days, MONTHS}) => {
    return (
        <Wrapper> 
            {
                weeks.map(() =>
                        days.map((day, index) => {
                        return <Day>{`${day }`}&nbsp;{`${index}`}</Day>
                    })
                )
            }
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

const Day = styled.div`
    display: flex;

    height: 100%;
    width: 100%;

    padding: 10px;

    background: gray;

    border: solid 2px black;
`

/*const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]

export const Days = ({ day, month, year, months, days, MONTHS}) => {
    return (
        <Wrapper> 
            {
                numbers.map((day) => {
                    let weekDay = 0
                    if (day === 0) {
                        weekDay = "Sunday"
                    }
                    return <Day>{`${day}`}&nbsp;{`${weekDay}`}</Day>
                })
            }
        </Wrapper>
    );
  };*/