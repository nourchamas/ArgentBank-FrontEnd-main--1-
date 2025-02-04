import { GET_USERPROFILE, EDIT_USERNAME } from "./type.actions";
// Action pour récupérer et enregistrer//
 //les données du profil utilisateur//
export const userProfile = (userData) => {
  return {
    type: GET_USERPROFILE,// Type pour récupérer les données du profil//
    payload: userData,// Données du profil utilisateur envoyées au reducer//
  };
};
// Action pour mettre à jour le nom d'utilisateur//
export const updateUsername = (username) => {
  return {
    type: EDIT_USERNAME,// Type pour modifier le nom d'utilisateur//
    payload: username, // Nouveau nom d'utilisateur envoyé au reducer
  };
};
