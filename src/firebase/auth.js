import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged 
} from "firebase/auth";

export const register = (email, password) => {

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            //const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            //const errorCode = error.code;
            //const errorMessage = error.message;
            // ..
        });
}

export const logIn = (email, password) => {

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            //const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            //const errorCode = error.code;
            //const errorMessage = error.message;
        });
}

export const userLogged = ( setCurrentUser ) => {

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        console.log(user);
        user 
            ? setCurrentUser(user)
            : setCurrentUser(null)
    });
}