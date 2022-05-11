import React, { useReducer, useEffect, useState } from "react";
import { login } from "./utils";

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(() => {
    const data = localStorage.getItem("loggedIn");
    if (data) return JSON.parse(data);
    return false;
  });

  const initialState = {
    userName: "",
    password: "",
    isLoading: false,
    error: ""
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "field":
        return { ...state, [action.field]: action.payload };
      case "success":
        localStorage.setItem("loggedIn", JSON.stringify(true));
        setLoggedIn(true);
        return { ...state, isLoading: false, error: "" };
      case "error":
        return {
          ...state,
          isLoading: false,
          error: "Invalid credentials!!"
        };
      case "loggedOut":
        return { ...state };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(formReducer, () => {
    const data = localStorage.getItem("items");
    console.log("aayo");
    if (data) return JSON.parse(data);
    return initialState;
  });
  const { userName, password, error } = state;

  useEffect(() => localStorage.setItem("items", JSON.stringify(state)));

  const submitLoginForm = async (e) => {
    e.preventDefault();

    try {
      await login({ user: userName, pass: password });
      dispatch({ type: "success" });
    } catch (err) {
      dispatch({ type: "error" });
    }
  };

  return loggedIn ? (
    "logged in"
  ) : (
    <div>
      <form onSubmit={submitLoginForm} method="GET">
        <font color="red">{error}</font>
        <br />
        username:{" "}
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            dispatch({
              type: "field",
              field: "userName",
              payload: e.currentTarget.value
            });
          }}
        />
        <br />
        password:{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => {
            dispatch({
              type: "field",
              field: "password",
              payload: e.currentTarget.value
            });
          }}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
