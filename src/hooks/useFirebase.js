import { useState , useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseAuthentication from "../firebase/firebase.init";

firebaseAuthentication();

const useFirebase = () => {
    
    const [user , setUser] = useState({})
    const [isLoading , setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const HandleGoogleSignUp = () => {
        setIsLoading(false);
        return signInWithPopup(auth, googleProvider);
    };

    const HandleGithubSignUp = () => {
        setIsLoading(false);
        return signInWithPopup(auth, githubProvider);
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
            setIsLoading(false)
          })
        , [auth])

    return {
        user,
        HandleGithubSignUp,
        HandleGoogleSignUp,
        logOut,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;