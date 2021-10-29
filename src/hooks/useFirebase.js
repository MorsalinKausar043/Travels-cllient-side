import { useState , useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseAuthentication from "../firebase/firebase.init";

firebaseAuthentication();

const useFirebase = () => {
    
    const [user , setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const HandleGoogleSignUp = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
    }

    const HandleGithubSignUp = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => setUser(result.user))
            .catch(err => console.log(err))
    };

    const logOut = () => signOut(auth);

    useEffect( ()=>
        onAuthStateChanged(auth, (user) => {
            if (user)
            {
                
                setUser(user);

            } else {
              
                setUser({})
            }
          })
        , [auth])

    return {
        user,
        HandleGithubSignUp,
        HandleGoogleSignUp,
        logOut
    }
}

export default useFirebase;