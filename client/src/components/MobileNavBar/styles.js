import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: ${({ toggle }) => (toggle ? "100%" : "0%")};
  background-color: black;
  opacity: 0.8;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  position: fixed;
  color: white;
  transition: 0.5s;
  top: 0;
  left: 0;
  overflow-y: hidden;
`;

export const CrossButton = styled.button`
  background-color: black;
  position: absolute;
  padding: 10px;
  top: 15%;
  right: 15%;
  cursor: pointer;
  border: none;

  svg {
    color: white;
  }
`;

export const AppName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    padding-left: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: white;
`;

export const NavLinks = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 768px) {
    &:hover {
      color: #87fc00;
    }
  }
`;

export const NavLink = styled(LinkR)`
  font-size: 18px;
  text-decoration: none;
  color: white;
  font-weight: bold;

  span {
    border: 1px solid white;
    margin-left: 10px;
    padding: 1px 4px;
    background-color: white;
    color: black;
  }

  &:hover {
    color: #fc8700;
    cursor: pointer;

    hr {
      width: 100%;
      opacity: 1;
    }
  }
`;
