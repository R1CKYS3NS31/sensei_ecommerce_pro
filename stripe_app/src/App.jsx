import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Pay } from "./components/pay/Pay";
import { Success } from "./components/success/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact>Home</Route>
        <Route path="/pay" element={<Pay />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              <Link to={"/"}>
                <button
                  style={{ backgroundColor: "green", textDecoration: "none" }}
                >
                  Home
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
