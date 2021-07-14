import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProductById } from "../../actions/product";

import {
  Container,
  ProductImage,
  ProductContent,
  ProductPrice,
  ProductTitle,
  ProductButton,
  ThumbNail,
  ProductDescription,
} from "./styles";

const Product = ({ product, setCurrentId }) => {
  const history = useHistory();

  const detailsHandler = () => {
    setCurrentId(product._id);
    history.push(`/product/${product._id}`);
  };

  return (
    <Container>
      <ThumbNail>
        <ProductImage src={product.imageUrl} alt={product.name} />
      </ThumbNail>
      <ProductContent>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
      </ProductContent>
      <ProductDescription>
        {product.description.substring(0, 100)}...
      </ProductDescription>
      <ProductButton onClick={detailsHandler}>View More</ProductButton>
    </Container>
  );
};

export default Product;
