import { loginFailue, loginStart, loginSuccess } from "./userRedux";
import { BASE_URL, TOKEN } from "../utils/requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      headers:{token:`Bearer ${TOKEN}`},
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
