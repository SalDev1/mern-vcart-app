import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { DELETE_FROM_CART } from "../../constants";
import FlipMove from "react-flip-move";

const CartItem = ({ id, title, imageUrl, description, price }) => {
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch({ type: DELETE_FROM_CART, payload: { id: id } });
  };

  return (
    <Container key={id}>
      <CartImage>
        <ImageUrl src={imageUrl} alt={title} />
      </CartImage>
      <CartContent>
        <Title>{title}</Title>
        <Description>{description.substring(0, 150)}...</Description>
        <Price>${price}</Price>
        <DeleteButton onClick={deleteHandler}>DELETE</DeleteButton>
      </CartContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: white;
  display: flex;
  align-items: center;
  margin: 15px 0px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    box-shadow: none;
    border: 2px solid lightgray;
  }
`;

const CartImage = styled.div`
  width: 80%;

  @media (max-width: 768px) {
    width: initial;
  }
`;

const ImageUrl = styled.img`
  width: 100%;
  object-fit: contain;
`;

const CartContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  margin-left: 10px;
`;

const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 28px;
`;

const Description = styled.p`
  margin-bottom: 15px;
  font-size: 16px;
`;

const Price = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
`;

const DeleteButton = styled.button`
  width: 50%;
  padding: 10px 20px;
  color: red;
  border: 2px solid red;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
  border-radius: 4px;

  &:hover {
    transition: all 0.5s;
    color: white;
    background-color: #cc0202;
  }
`;

export default CartItem;
