// Importation de la fonction configureStore et
//  combineReducers de Redux Toolkit
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// Importation des réducteurs pour l'authentification et 
// les données utilisateur
import { authReducer } from './reducers/auth.reducer.jsx';
import { userReducer } from './reducers/user.reducer.jsx';

const rootReducer = combineReducers({
   auth: authReducer,// Le réducteur de l'authentification
   user: userReducer,// Le réducteur des données utilisateur
})
// Création du store Redux avec la fonction configureStore
const store = configureStore({
    reducer: rootReducer, // Le réducteur racine combine tous les réducteurs
    devTools: true  // Active les outils de développement Redux dans le navigateur
})
// Exportation du store pour pouvoir l'utiliser dans l'application
export default store