export const BASE_URL = "http://localhost:9000/api";
export const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
  .currentUser.accessToken;

// export const publicRequest = async (path) => await fetch(`BASE_URL${path}`);

// export const userRequest = fetch(BASE_URL, {
//   header: { token: `Bearer ${TOKEN}` },
// });
