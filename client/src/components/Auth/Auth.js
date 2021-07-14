import React, { useState } from "react";
import {
  Container,
  AppName,
  SwitchButtons,
  Button,
  FormPage,
  Title,
} from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Login from "./Login";
import SignUp from "./SignUp";
import { AUTH } from "../../constants";

const Auth = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const API_KEY = process.env.REACT_APP_GOOGLE_ID;

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    dispatch({ type: AUTH, data: { result, token } });
    history.push("/");
  };

  const googleFailure = () => {
    console.log("Google Log in was unsucessful.");
  };

  return (
    <Container>
      <AppName>
        <Title>VCART</Title>
        <AiOutlineShoppingCart size={24} />
      </AppName>
      <SwitchButtons>
        <Button toggle={toggle} onClick={toggleHandler}>
          Login
        </Button>
        <Button toggle={!toggle} onClick={toggleHandler}>
          Sign Up
        </Button>
      </SwitchButtons>
      <FormPage>{toggle ? <Login /> : <SignUp />}</FormPage>
      <GoogleLogin
        clientId={API_KEY}
        buttonText="Log In with Google"
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        isSignedIn={user ? true : false}
      />
    </Container>
  );
};

export default Auth;
