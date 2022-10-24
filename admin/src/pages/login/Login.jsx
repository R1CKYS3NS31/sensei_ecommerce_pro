import React from "react";
import { useState } from "react";
import { useDispatch } from "'react-redux";
import { login } from "../../redux/apiCalls";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // login
    login(dispatch, { username, password });
  };
  return (
    <div className="">
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
