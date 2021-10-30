import React from 'react';
import { NavLink } from 'react-router-dom';
import "./services.css";

const ServicesPart = ({ _id, title, body, src, status }) => {

    return (
        <>
            <div class="col">
                    <div class="card service_img_box h-100">
                        <img src={src} class="services_images" alt="services_image"/>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{body.slice(0, 200)}</p>
                        <div className="text-start">
                            <NavLink to={`service/${_id}`} className="btn btn-outline-danger">Booking Now</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPart;