import React from "react";
import styled from "styled-components";
import { COLORS } from "../colors.tsx";

export const Header = () => {
    return (
        <Wrapper> 
            <Title data-testid="header-title">CALENDAR APP</Title>
        </Wrapper>
    );
  };
  
  const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${COLORS.primaryColor};

  height: 7vh;
`;

const Title = styled.h1`
    font-size: 38px;
`