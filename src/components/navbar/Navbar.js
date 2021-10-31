import React from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Navbar.css";

const Navbar = () => {

    const history = useHistory()
    const { user, logOut } = useAuth();
    const logo_img = "https://i.ibb.co/BffJjtx/logo-1.png";
    const static_images = "https://i.ibb.co/q0QVrCN/images-2.jpg";

    const LogOut = () => {
        logOut()
        .then(() => history.push("/"))  
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo_img} alt="logo_imgages" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link nav_list text-dark" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav_list text-dark" to="/myorder">My Order</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav_list text-dark" to="/manageorder">Manage All Orders</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav_list text-dark" to="/addservice">Add Service</NavLink>
                        </li>
                    </ul>
                    <div>
                            {
                                user.email || user.displayName ?
                                
                                <div className="d-flex">
                                    <p className="my-auto">{user.displayName}</p>
                                    <img src={user.photoURL || static_images} alt="profile_img" className="profile_photo shadow mx-3" />
                                    <button className="login_btn" onClick={LogOut}>Log Out</button>
                                </div>
                                    :
                                <NavLink to="/signin">
                                    <button className="login_btn">Sign In</button>
                                </NavLink>
                                    
                        }
                    </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;