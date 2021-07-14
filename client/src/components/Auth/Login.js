import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { signIn } from "../../actions/auth";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(userData, history));
    history.push("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        required
        onChange={handleChange}
        aria-label="firstName"
        name="email"
        placeholder="Your Email"
      />
      <Input
        type="password"
        aria-label="lastName"
        required
        onChange={handleChange}
        name="password"
        placeholder="Your Password"
      />
      <SubmitButton type="submit">Login</SubmitButton>
    </Form>
  );
};

export const Form = styled.form`
  margin-top: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  margin: 10px 0px;
  width: 60%;
  padding: 10px;
  border: none;
  outline-width: 0px;
  border-radius: 4px;
  background-color: whitesmoke;
  color: black;

  &:focus {
    border: 0.5px solid #fc8700;
  }
`;

export const SubmitButton = styled.button`
  margin: 20px 0px;
  width: 64%;
  padding: 10px 30px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fc8700;
  border: none;
  color: white;
  font-size: 16px;
`;

export default Login;
