
import React from 'react';
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import { useHistory, useLocation } from "react-router";
import "./login.css";

const Login = () => {

    const { HandleGithubSignUp, HandleGoogleSignUp } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_location = location.state?.from || "/home";

    const GoogleSignUp = () => {
        HandleGoogleSignUp()
            .then(() => {
                history.push(redirect_location)
            });
    };

    const GithubSignUp = () => {
        HandleGithubSignUp()
            .then(() => {
                history.push(redirect_location)
            });
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-10 mx-auto login_box">
                        <div className="login_form shadow">
                            <h2 className="login_title">Sign In With</h2>
                            <button className="login_Btn" onClick={GoogleSignUp}>
                                <FcGoogle className="input_box_icon"/>
                                Continue With Google
                            </button>
                            <button className="login_Btn" onClick={GithubSignUp}>
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