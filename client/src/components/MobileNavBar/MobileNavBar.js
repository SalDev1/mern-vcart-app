import React from "react";
import {
  Container,
  AppName,
  Title,
  NavLinks,
  NavLink,
  CrossButton,
} from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../constants";
import { ImCross } from "react-icons/im";

const MobileNavBar = ({ toggle, toggleHandler }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = JSON.parse(localStorage.getItem("profile"));

  const logoutHandler = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
  };

  return (
    <Container toggle={toggle}>
      <CrossButton onClick={toggleHandler}>
        <ImCross size={24} />
      </CrossButton>
      <AppName onClick={() => history.push("/")}>
        <Title>VCART</Title>
        <AiOutlineShoppingCart size={24} />
      </AppName>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink to="/cart">
          Cart <span className="cartcount">{cartItems.length}</span>
        </NavLink>
        <NavLink onClick={logoutHandler}>
          {user ? "Sign Out" : "Sign In"}
        </NavLink>
      </NavLinks>
    </Container>
  );
};

export default MobileNavBar;
