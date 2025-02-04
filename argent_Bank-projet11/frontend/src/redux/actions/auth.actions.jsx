import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SIGNUP_SUCCESS, SIGNUP_FAIL } from "./type.actions";
// Stocke le token de l’utilisateur dans Redux après connexion réussie//
export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,// Type d'action pour la réussite de la connexion
    //Le payload contient le token JWT reçu du backend apres connection//
    payload: token,
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAIL,// Type d'action pour l'échec de la connexion
    payload: error,// Le payload contient l'erreur retournée par le backend
  };
};

export const signupSuccess = (token) => {
  return {
    type: SIGNUP_SUCCESS, // Type d'action pour la réussite de l'inscription
    payload: token,// Le payload contient le token JWT reçu du backend 
    // après une inscription réussie
  };
};

export const signupFailed = (error) => {
  return {
    type: SIGNUP_FAIL,// Type d'action pour l'échec de l'inscription
    payload: error, // Le payload contient l'erreur retournée par le backend
  };
};

export const logout = () => {
  return {
    type: LOGOUT,// Type d'action pour la déconnexion de l'utilisateur
  }; // Pas de payload ici, car aucune donnée supplémentaire 
  // n'est nécessaire pour la déconnexion
};
