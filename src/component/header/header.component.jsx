import React from "react-dom";
import { STitle, StyledHeader } from "./header.style";
import data from "../../data.json";

export const Header = () => {
  return (
    <StyledHeader>
      <STitle>{data.number}</STitle>
    </StyledHeader>
  );
};

// this is the number
