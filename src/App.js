import "./index.css";
import Login from "./Login";
import Home from "./Home";
import User from "./User";
import Book from "./Book";
import FormFood from "./FormFood";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import ProtectedRoute from "./ProtectedRoute";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditForm from "./EditForm";
import axios from "axios";

function App() {
  const [isAuth, setAuth] = useState(false);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8001/foods").then((res) => setFoods(res.data));
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={<Login isAuth={isAuth} setAuth={setAuth} />}
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Transactions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <User />
              </ProtectedRoute>
            }
          />

          <Route path="/book" element={<Book />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/formFood" element={<FormFood />} />
          <Route path="/editForm" element={<EditForm foods={foods} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
