// Fonction pour vérifier la validité d'un nom
export const isValidName = (name) => {
    const regex = /^[a-zA-Z]+(?:[-']?[a-zA-Z]+)*$/;
    return regex.test(name);
};

// Fonction pour vérifier la validité d'un email
export const isValidEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
};
// Fonction pour vérifier la validité d'un mot de passe 
export const isValidPassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/; 
     // Retourne true si le mot de passe correspond
     //  à l'expression régulière, sinon false
    return regex.test(password);
};