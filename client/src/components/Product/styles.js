import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  margin-top: 10px;
  width: 325px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 20px;
  padding: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  justify-content: center;
`;

export const ThumbNail = styled.div`
  width: 100%;
  position: relative;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  display: block;
`;

export const ProductContent = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 10px;
`;

export const ProductTitle = styled.h1`
  font-size: 1.5rem;
  color: #171717;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: #171717;
`;

export const ProductButton = styled.button`
  margin: 35px;
  width: 75%;
  font-size: 16px;
  outline-width: 0px;
  padding: 10px 20px;
  background-color: #fc8700;
  border: none;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;

export const ProductDescription = styled.p`
  width: 80%;
  font-size: 14px;
  padding: 10px 5px;
  text-align: left;
`;
