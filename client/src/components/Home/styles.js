import styled from "styled-components";

export const HomeScreen = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  margin: 1.5rem auto;
  padding: 0px 20px;
  align-items: center;
  justify-content: flex-end;
`;

export const HomeScreenTitle = styled.h1`
  font-size: 1.5rem;
  color: #171717;
  font-weight: bold;
  text-align: left;
`;

export const HomeScreenProducts = styled.div`
  margin-top: 30px;
  width: 80%;
  place-items: center;
  display: grid;
  justify-content: center;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
