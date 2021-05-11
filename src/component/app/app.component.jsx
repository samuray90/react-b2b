import React from "react";
import { Header } from "../header";
import data from "../../data.json";
import { NewsTitle, Wrapper } from "../header/header.style";
import { StyledB, ButtonWrapper } from "../button/style.button";
const App = () => {
  return (
    <Wrapper>
      <Header />
      <NewsTitle>{data.title}</NewsTitle>
      <ButtonWrapper>
        <StyledB>All</StyledB>
        <StyledB>News</StyledB>
        <StyledB>Twitter</StyledB>
      </ButtonWrapper>
    </Wrapper>
  );
};

export { App };
