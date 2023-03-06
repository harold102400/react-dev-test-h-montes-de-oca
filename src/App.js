import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import AddUser from "./pages/AddUser";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import "./styles/index.css";

function App() {
  const { logged } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (logged && pathname === "/login") {
      navigate('/dashboard')
    }
    if(!logged && pathname !== '/login') {
      navigate('/login')
    }
  }, [logged, pathname, navigate]);

  return (
    <Routes>
      <Route path="/" exact element={<Navigate to="/dashboard" />} />
      <Route
        path="/dashboard"
        element={
          <Navbar>
            <Dashboard />
          </Navbar>
        }
      />
      <Route
        path="/adduser"
        element={
          <Navbar>
            <AddUser />
          </Navbar>
        }
      />
      <Route
        path="/users"
        element={
          <Navbar>
            <Users />
          </Navbar>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
