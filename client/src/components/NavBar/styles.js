import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  position: sticky;
  z-index: 10;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  color: white;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const AppName = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    padding: 10px;
  }

  @media (max-width: 768px) {
    svg {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const NavLinks = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(LinkR)`
  font-size: 18px;
  text-decoration: none;
  color: white;
  font-weight: bold;

  hr {
    width: 0%;
    opacity: 0;
    transition: width 0.5s;
  }

  span {
    border: 1px solid white;
    margin-left: 10px;
    padding: 1px 4px;
    background-color: white;
    color: black;
  }

  &:hover {
    hr {
      width: 100%;
      opacity: 1;
    }
  }
`;

export const UserProfile = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserName = styled.p`
  padding-left: 10px;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

export const MobileNavIcon = styled.div`
  height: fit-content;
  padding: 10px;
  border: 1px solid white;
  border-radius: 4px;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
