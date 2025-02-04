import { GET_USERPROFILE, EDIT_USERNAME, LOGOUT } from "../actions/type.actions";

const initialState = {
  status: "VOID",// Statut initial de l'action (aucune action effectuée)
  userData: {},// Les données de l'utilisateur, initialement vides
};
// Réducteur pour gérer les actions liées aux données utilisateur
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Cas pour récupérer les données du profil utilisateur
    case GET_USERPROFILE:
      return {
        ...state,
        status: "SUCCEEDED",
        userData: action.payload,// Les données utilisateur sont mises à jour 
        // avec les informations reçues (payload)
      };
      // Cas pour modifier le nom d'utilisateur
    case EDIT_USERNAME:
      return {
        ...state,
        status: "MODIFIED",
        userData: {
          ...state.userData,
          username: action.payload,// Cas pour modifier le nom d'utilisateur
        },
      };
       // Cas pour déconnecter l'utilisateur
       //  (réinitialiser les données utilisateur)
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};
