import React from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Footer from '../components/footer/Footer';
import Home from '../components/Home';
import Login from '../components/login/Login';
import Navbar from '../components/navbar/Navbar';
import AuthProvider from "../context/AuthProvider";

const Routes = () => {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/signin" component={Login} />
                    </Switch>
                    <Footer/>
                </Router>
            </AuthProvider> 
        </>
    );
};

export default Routes;