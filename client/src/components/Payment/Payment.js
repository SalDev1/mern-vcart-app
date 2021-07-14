import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Title,
  Content,
  OrderPrice,
  OrderTitle,
  Div1,
  TotalAmount,
  SubHeader,
  Total,
  PaymentOptions,
  PaymentTitle,
  PaymentButton,
} from "./styles";

const Payment = ({ getCartTotal }) => {
  const orders = useSelector((state) => state.cart.cartItems);
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, action, error) => {
          return action.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: getCartTotal(orders),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = actions.order.capture();
          if (order) {
            alert("You order has been successfully been placed");
          }
        },
        onError: (error) => {
          console.log(error);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <Container>
      <Title>
        <span>Order</span> Summary <hr />
      </Title>
      <Content>
        {orders.map((order) => (
          <>
            <Div1>
              <OrderTitle>
                1 X <span>{order.name}</span>
              </OrderTitle>
              <OrderPrice>
                $ <span>{order.price}</span>
              </OrderPrice>
            </Div1>
          </>
        ))}
      </Content>
      <hr />
      <TotalAmount>
        <SubHeader>Total :</SubHeader>
        <Total>
          $<span>{getCartTotal(orders)}</span>
        </Total>
      </TotalAmount>
      <PaymentOptions>
        <PaymentTitle>Choose your Payment Option:</PaymentTitle>
        <PaymentButton ref={paypal}></PaymentButton>
      </PaymentOptions>
    </Container>
  );
};

export default Payment;
