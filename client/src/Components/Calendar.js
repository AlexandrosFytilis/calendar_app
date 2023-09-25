import React from "react";
import styled from "styled-components";
import { Content } from "./Content";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Calendar = () => {
    return (
        <Wrapper>
            <Header /> 
            <Content />
            <Footer />
        </Wrapper>
    );
  };

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: gray;
`;
