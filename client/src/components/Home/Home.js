import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/product";
import Product from "../Product/Product";
import { HomeScreen, HomeScreenTitle, HomeScreenProducts } from "./styles";

const Home = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products[0]);

  return (
    <HomeScreen>
      <HomeScreenTitle>Latest Products</HomeScreenTitle>
      <HomeScreenProducts>
        {products?.map((product) => (
          <Product
            product={product}
            key={product._id}
            setCurrentId={setCurrentId}
          />
        ))}
      </HomeScreenProducts>
    </HomeScreen>
  );
};

export default Home;
