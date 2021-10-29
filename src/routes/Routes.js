import React from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import AddService from '../components/addService/AddService';
import DetailService from '../components/detailService/DetailService';
import ErrorPage from '../components/errorPage/ErrorPage';
import Footer from '../components/footer/Footer';
import Home from '../components/Home/Home';
import Login from '../components/login/Login';
import Navbar from '../components/navbar/Navbar';
import PrivateRoute from '../components/privateRoute/PrivateRoute';
import AuthProvider from "../context/AuthProvider";

const Routes = () => {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route path="/signin" component={Login} />
                        <PrivateRoute path="/addservice">
                            <AddService/>
                        </PrivateRoute>
                        <PrivateRoute path="/service/:id">
                            <DetailService/>
                        </PrivateRoute>
                        <Route exact path="*" component={ErrorPage} />
                    </Switch>
                    <Footer/>
                </Router>
            </AuthProvider> 
        </>
    );
};

export default Routes;