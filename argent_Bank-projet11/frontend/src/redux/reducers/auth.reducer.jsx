// Importation des types d'actions nécessaires 
// pour gérer l'état de l'authentification
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../actions/type.actions";
// Définition de l'état initial pour l'authentification
const initialState = {
  status: "VOID",
  isConnected: false,
  token: null,// Token d'authentification (le JWT si l'utilisateur est connecté)
  error: null,// Si une erreur se produit, elle sera stockée ici
};
// Réducteur pour gérer les actions liées à l'authentification
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
     // Cas de succès de la connexion
    case LOGIN_SUCCESS:
      return {
        ...state,
        status: "SUCCEEDED",// Mise à jour du statut à "SUCCEEDED"
        isConnected: true, // L'utilisateur est maintenant connecté
        token: action.payload, // Le token JWT est stocké dans l'état
        error: null,// Aucune erreur en cas de succès
      };
// Cas d'échec de la connexion
    case LOGIN_FAIL: {
      return {
        ...state,
        status: "FAILED",
        isConnected: false,
        error: action.payload,// L'erreur retournée par l'action est stockée ici
      };
    }
 // Cas d'échec de l'inscription
    case SIGNUP_FAIL: {
      return {
        ...state,
        status: "FAILED",
        isConnected: false,
        error: action.payload,// L'erreur retournée par l'action est stockée ici
      };
    }
// Cas de succès de l'inscription
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        status: "SUCCEEDED",
        isConnected: true,
        token: action.payload,
        error: null,// Aucune erreur en cas de succès
      };
    }
  // Cas de déconnexion
    case LOGOUT: {
      return initialState;// Réinitialise l'état à l'état initial
      //  (l'utilisateur est déconnecté)
    }
    // Cas par défaut : si aucune action ne correspond,
    //  on retourne l'état inchangé
    default:
      return state;
  }
};
