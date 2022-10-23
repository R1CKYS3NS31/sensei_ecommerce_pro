import { loginFailue, loginStart, loginSuccess } from "./userRedux";
import { BASE_URL } from "../utils/requestMethods";

// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNGQyYTUyNzg0ZGM3ODFhMTk3YTQzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjMzODA4MSwiZXhwIjoxNjY2NDI0NDgxfQ.G25eZ8og8z6KegqANcznIB4U7jSVy8Rn6tWVdORlKog";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const userData = await res.json();
    dispatch(loginSuccess(userData));
    console.log(userData);
  } catch (error) {
    dispatch(loginFailue());
    console.error(error);
  }
};
