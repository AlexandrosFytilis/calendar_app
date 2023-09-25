import React from "react";
import styled from "styled-components";
import { Month } from "./Months";
import { Days } from "./Days";

export const Content = () => {
    return (
        <Wrapper> 
            <Month />
            <Days /> 
        </Wrapper>
    );
  };
  
const Wrapper = styled.div`
  display: flex;
  background: green;

  height: 90vh;
`;