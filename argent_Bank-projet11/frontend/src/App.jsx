
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import Signup from "./pages/Signup/Signup";
import { useEffect } from "react";
import { loginSuccess } from "./redux/actions/auth.actions";

function App() {
  const isConnected = useSelector((state) => state.auth.isConnected);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      dispatch(loginSuccess(token));
    }
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={isConnected ? <Profile /> : <Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
