import React from "react";
import {
  Container,
  AppName,
  Title,
  NavLinks,
  NavLink,
  UserProfile,
  UserName,
  MobileNavIcon,
} from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../constants";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ toggleHandler }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("profile"));
  const cartItems = useSelector((state) => state.cart.cartItems);

  const logoutHandler = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
  };

  return (
    <Container>
      <AppName onClick={() => history.push("/")}>
        <Title>VCART</Title>
        <AiOutlineShoppingCart size={24} />
      </AppName>
      <NavLinks>
        <NavLink to="/">
          Home
          <hr />
        </NavLink>
        <NavLink>
          About <hr />
        </NavLink>
        <NavLink to="/cart">
          Cart <span className="cartcount">{cartItems?.length}</span> <hr />
        </NavLink>
        <NavLink onClick={logoutHandler}>
          {user ? "Sign Out" : "Sign In"}
          <hr />
        </NavLink>
      </NavLinks>
      <UserProfile>
        <Avatar alt={user?.result?.name} src={user?.result?.imageUrl} />
        <UserName onClick={logoutHandler}>{user?.result?.name}</UserName>
      </UserProfile>
      <MobileNavIcon onClick={toggleHandler}>
        <GiHamburgerMenu size={24} />
      </MobileNavIcon>
    </Container>
  );
};

export default NavBar;
