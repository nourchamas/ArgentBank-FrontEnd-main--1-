import React from "react";
// Importation de ReactDOM pour rendre l'application dans le DOM
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.jsx";
// Importation des composants nécessaires pour la gestion des routes
import { BrowserRouter } from "react-router-dom";
// Importation du Provider de Redux pour connecter 
// le store Redux à l'application
import { Provider } from "react-redux";
// Utilisation de ReactDOM pour rendre l'application dans 
// l'élément HTML avec l'id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
