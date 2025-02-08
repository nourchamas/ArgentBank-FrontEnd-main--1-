// Importation des styles CSS et des composants nécessaires
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import Signup from "./pages/Signup/Signup";
import { useEffect } from "react";
import { loginSuccess } from "./redux/actions/auth.actions";

function App() {
   // Sélection de l'état de connexion 
   // de l'utilisateur à partir du store Redux
  const isConnected = useSelector((state) => state.auth.isConnected);
  // Déclaration du dispatch pour envoyer des actions Redux
  const dispatch = useDispatch();
  // Utilisation de useEffect pour vérifier si un token existe 
   useEffect(() => {
    // Récupération du token depuis localStorage ou sessionStorage
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
     // Si un token est trouvé, dispatch de l'action loginSuccess avec le token
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
