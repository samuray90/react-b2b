import styled from "styled-components";
import image from "../../asset/page-header.jpg";

export const StyledHeader = styled.div`
  height: 10px;
  padding: 50px;
  background-color: pink;
  background-image: url(${image});
  padding-top: 56.22%;
  background-size: cover;
  position: relative;
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
`;
