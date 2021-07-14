import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../constants";
import CartItem from "./CartItem";
import {
  Container,
  LeftDiv,
  Title,
  RightDiv,
  TotalItems,
  SubTotal,
  OrderTitle,
  OrderButton,
  Items,
} from "./styles";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const getCartTotal = (cartItems) => {
    return cartItems.reduce((amount, item) => parseInt(item.price) + amount, 0);
  };

  return (
    <Container>
      <LeftDiv>
        <Title>
          Your {cartItems.length === 1 ? "Item" : "Items"} ({cartItems.length})
        </Title>
        <hr />
        <Items>
          {cartItems.map((item) => (
            <CartItem
              id={item._id}
              title={item.name}
              price={item.price}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </Items>
      </LeftDiv>
      <RightDiv>
        <CurrencyFormat
          renderText={(value) => (
            <>
              {" "}
              <OrderTitle>Order Details</OrderTitle>
              <TotalItems>
                Total No of Items : <span>{cartItems.length}</span>
              </TotalItems>
              <SubTotal>
                SubTotal : <span>{value}</span>
              </SubTotal>
              <hr />
              <OrderButton onClick={() => history.push("/payment")}>
                Proceed to Order
              </OrderButton>
            </>
          )}
          decimalScale={2}
          prefix={"$"}
          thousandSeparator={true}
          displayType="text"
          value={getCartTotal(cartItems)}
        />
      </RightDiv>
    </Container>
  );
};

export default Cart;
