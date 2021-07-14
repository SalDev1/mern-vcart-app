import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid lightgray;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  hr {
    width: 100%;
    background-color: lightgray;
    color: lightgray;
  }

  @media (max-width: 768px) {
    box-shadow: none;
  }
`;

export const Title = styled.h1`
  font-size: 24px;

  span {
    color: #fc8700;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Div1 = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderTitle = styled.p`
  font-size: 18px;

  span {
    padding-left: 5px;
    font-size: 24px;
    font-weight: 600;
  }
`;

export const OrderPrice = styled.p`
  font-size: 18px;
  font-weight: 600;

  span {
    color: #fc8700;
  }
`;

export const TotalAmount = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubHeader = styled.h2`
  font-size: 22px;
`;

export const Total = styled.p`
  font-size: 18px;
  font-weight: 600;

  span {
    padding-left: 5px;
    color: #fc8700;
  }
`;

export const PaymentOptions = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PaymentTitle = styled.p`
  font-size: 22px;
`;

export const PaymentButton = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
