import React from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/login/Login';
import AuthProvider from "../context/AuthProvider";

const Routes = () => {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/signin" component={Login} />
                    </Switch>
                </Router>
            </AuthProvider> 
        </>
    );
};

export default Routes;