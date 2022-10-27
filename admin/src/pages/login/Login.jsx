import { useState } from "react";
import { useDispatch } from "react-redux";
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
    <div
      className=""
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Login</h1>
      <input
        style={{ padding: "10px", marginBottom: "20px" }}
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: "10px", marginBottom: "20px" }}
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleClick}
        style={{
          padding: "10px",
          width: "100px",
        }}
      >
        Login
      </button>
    </div>
  );
};
