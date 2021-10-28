
import React from 'react';
import  useAuth  from "../../hooks/useAuth";

const Login = () => {
    const { user, HandleGithubSignUp, HandleGoogleSignUp } = useAuth();
    user ? console.log(user) : console.log("user nai");
    return (
        <>
            <button onClick={HandleGoogleSignUp}>sign in google</button>
            <button onClick={HandleGithubSignUp}> sign in github</button>
        </>
    );
};

export default Login;