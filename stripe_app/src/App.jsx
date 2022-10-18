import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/pay'>
          pay
        </Route>
        <Route path='/success'>
          success
        </Route>
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
