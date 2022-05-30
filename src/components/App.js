import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./DashboardPage/Dashboard";
import Header from "./Header/Header";
import Signin from "./SigninPage/Signin";

const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  if (token) {
    return (
      <BrowserRouter>
        <Header setToken={setToken} />
        <Routes>
          <Route path="/" element={<Navigate to="/Dashboard" replace />} />
          <Route path="/Dashboard" element={<Main />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Header setToken={setToken} />
        <Routes>
          <Route path="/Dashboard" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Signin setToken={setToken} />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;
