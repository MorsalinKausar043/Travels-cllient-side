
import React from 'react';
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import "./login.css";

const Login = () => {
    const { HandleGithubSignUp, HandleGoogleSignUp, user } = useAuth();
    console.log(user)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-10 mx-auto login_box">
                        <div className="login_form shadow">
                            <h2 className="login_title">Sign In With</h2>
                            <button className="login_Btn" onClick={HandleGoogleSignUp}>
                                <FcGoogle className="input_box_icon"/>
                                Continue With Google
                            </button>
                            <button className="login_Btn" onClick={HandleGithubSignUp}>
                                <GoMarkGithub className="input_box_icon"/>
                                Continue With Github
                            </button>
                            <div className="d-flex mt-3">
                                <p className="me-2"><small>Don't have a account?</small></p>
                                <p className="text-primary"><small>Create an Account</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;