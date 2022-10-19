import "./App.css";
import { Cart } from "./pages/cart/Cart";
import { Login } from "./pages/login/Login";
import { Product } from "./pages/product/Product";
import { Register } from "./pages/register/Register";
import { Homepage } from "./pages/Homepage";
import { ProductList } from "./pages/productList/ProductList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  // return <Homepage />
  //   return <ProductList/>
  //   return <Product/>
  // return <Register/>
  // return <Login/>
  // return <Cart/>
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} exact></Route>{" "}
        <Route path={"/products"} element={<ProductList />}></Route>
        {/* none existing route */}
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
                flexDirection:'column'
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
