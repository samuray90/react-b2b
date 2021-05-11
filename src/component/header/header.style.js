import styled from "styled-components";
import image from "../../asset/page-header.jpg";

export const StyledHeader = styled.div`
  background-image: url(${image});
  padding-top: 56.22%;
  background-size: cover;
  position: relative;
  grid-column: 1/-1;
`;

export const STitle = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
  grid-column: 1/-1;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 15px;
`;

export const NewsTitle = styled.div`
  color: black;
  grid-column: 1/-1;
  display: flex;
  font-weight: 600;
  padding-top: 20px;
  margin: 10px;
  font-size: 20px;
`;
