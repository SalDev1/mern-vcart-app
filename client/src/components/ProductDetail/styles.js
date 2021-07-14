import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1rem auto;
  grid-column-gap: 20px;

  hr {
    color: gray;
    background-color: gray;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftThumbNail = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
`;

export const LeftImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
`;

export const ProductDetails = styled.div`
  height: fit-content;
  padding: 1.5rem;
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const Price = styled.p`
  font-size: 16px;
  padding: 10px 5px;

  span {
    font-weight: 600;
  }
`;

export const Description = styled.p`
  padding: 10px 5px;
  font-size: 15px;

  span {
    font-weight: 600;
  }
`;

export const Div1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ProductStatus = styled.div`
  margin-top: 1rem;
  width: 90%;
  height: fit-content;
  padding: 1.5rem;
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
`;

export const Status = styled.p`
  font-size: 16px;
  padding: 10px 5px;
`;

export const Quantity = styled.p`
  font-size: 16px;
  padding: 10px;

  select {
    margin-left: 10px;
  }
`;

export const Amount = styled.p`
  font-size: 16px;
  padding: 10px;
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  border: none;
  background-color: #fc8700;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  outline-width: 0px;
`;
