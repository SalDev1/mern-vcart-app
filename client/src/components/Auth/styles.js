import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  padding: 10px;
  border: 1px solid lightgray;
  padding: 40px 20px;

  .googleButton {
    width: 100%;
    text-align: center;
    border: 1px solid black;
  }

  @media (max-width: 768px) {
    border: none;
    width: initial;
  }
`;

export const AppName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    padding-left: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: black;
`;

export const SwitchButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  color: black;
  cursor: pointer;
  border-bottom: 3px solid
    ${({ toggle }) => (toggle ? "#fc8700" : "transparent")};
  width: 30%;
  font-size: 18px;
  background-color: transparent;
`;

export const FormPage = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;
