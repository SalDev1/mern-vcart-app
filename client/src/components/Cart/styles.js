import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: initial;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  hr {
    margin: 15px 0px;
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Items = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2;
`;

export const RightDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  height: fit-content;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  hr {
    background-color: lightgray;
    color: lightgray;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    width: 70%;
    box-shadow: none;
    border: 2px solid lightgray;
  }
`;

export const OrderTitle = styled.h2`
  padding: 15px 0px;
  font-size: 24px;
`;

export const TotalItems = styled.p`
  font-size: 16px;
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubTotal = styled.p`
  font-size: 16px;
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderButton = styled.button`
  margin-top: 10px;
  width: 100%;
  border-radius: 50px;
  background-color: #fc8700;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.15em;

  &:hover {
    background-color: #e87c00;
  }
`;
