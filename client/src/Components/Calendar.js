import React from "react";
import styled from "styled-components";

export const Calendar = () => {
    return (
        <Wrapper>
            <p>CALENDAR</p>
        </Wrapper>
    );
  };

  const Wrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    background-color: gray;
`;