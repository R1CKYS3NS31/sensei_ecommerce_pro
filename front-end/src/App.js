import "./App.css";
import { Cart } from "./pages/cart/Cart";
import { Login } from "./pages/login/Login";
import { Product } from "./pages/product/Product";
import { Register } from "./pages/register/Register";
import { Homepage } from "./pages/Homepage";
import { ProductList } from "./pages/productList/ProductList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Success } from "./pages/success/Success";
function App() {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Homepage />} exact></Route>{" "}
        <Route path={"/products/:category"} element={<ProductList />}></Route>
        <Route path={"/product/:id"} element={<Product />}></Route>
        <Route path={"/cart"} element={<Cart />}></Route>
        <Route
          path={"/login"}
          element={user ? <Navigate to={"/"} /> : <Login />}
        ></Route>
        <Route
          path={"/register"}
          element={user ? <Navigate to={"/"} /> : <Register />}
        ></Route>
        <Route path="/success" element={<Success />}></Route>
        {/* none existing routes */}
        <Route
          path="*"
          element={
            <main
              style={{
                padding: "1rem",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h1>There's nothing here!</h1>
              <Link to={"/"}>
                <button
                  style={{
                    textDecoration: "none",
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Go Back Home
                </button>
              </Link>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
