import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProductById } from "../../actions/product";
import { ADD_TO_CART } from "../../constants";
import {
  Container,
  LeftThumbNail,
  LeftImage,
  ProductDetails,
  Title,
  Price,
  Description,
  ProductStatus,
  Status,
  Quantity,
  Button,
  Div1,
  Amount,
} from "./styles";

const ProductDetail = ({ currentId }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.currentProduct);

  useEffect(() => {
    dispatch(getProductById(currentId));
  }, [dispatch]);

  const addtoCartHandler = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TO_CART, payload: productDetails });
  };

  return (
    <Container>
      <LeftThumbNail>
        <LeftImage src={productDetails?.imageUrl} />
      </LeftThumbNail>
      <Div1>
        <ProductDetails>
          <Title>{productDetails?.name}</Title>
          <hr />
          <Price>
            <span>Price</span> : ${productDetails?.price}
          </Price>
          <hr />
          <Description>
            <span>Description</span> : {productDetails?.description}
          </Description>
        </ProductDetails>
        <ProductStatus>
          <Amount>
            Price : <span>${productDetails?.price}</span>
          </Amount>
          <hr />
          <Status>
            Status :{" "}
            {productDetails?.countInStock > 0 ? "In Stock" : "Out of Stock"}
          </Status>
          <hr />
          <Quantity>
            Qty :
            <select value={qty} onChange={(e) => setQty(e.target.value)}>
              {[...Array(productDetails?.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </Quantity>
          <hr />
          <Button onClick={addtoCartHandler}>Add to Cart</Button>
        </ProductStatus>
      </Div1>
    </Container>
  );
};

export default ProductDetail;
