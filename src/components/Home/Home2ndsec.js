import React from 'react';
import { GiCommercialAirplane } from 'react-icons/gi';
import { FaLocationArrow } from 'react-icons/fa';
import "./home2ndsec.css";

const Home2ndsec = () => {

    const img = "https://i.ibb.co/wBsZxbp/download-3.jpg";

    return (
        <>
            <div className="my-3">
                <div className="row">
                    <div className="col-md-6 img_box col-11 mx-auto p-0">
                        <img src={img} className="w-100 h-100 banner_2nd_img" alt="benner_img" />
                    </div>
                    <div className="col-md-6 col-11 mx-auto bg-dark text-light p-3 p-md-5">
                        <div>
                            <h5 className="mini_title_benner2nd">Our benefit lists</h5>
                            <h1 className="mb-5 ms-3 fw-bold"><span className="text-danger">W</span>hy Choose Tevily</h1>
                            <p ><span className="display-6 fw-bold text-danger">T</span>here are many variations of passages of Lorem Ipsum is simply free text available in the market for you, but the majority have suffered alteration in some form.</p>
                        </div>
                        <div className="row my-5 text-center text-md-start">
                            <div className="col-10 m-auto col-md-3">
                                <GiCommercialAirplane className="display-1 banner_rotate text-danger me-3"/>
                            </div>
                            <div className="col-10 mx-auto col-md-9">
                                <h2>Professional and Certified</h2>
                                <p>I’ve heard there are people who believe that “getting there is half the fun.” But to me, everything that happens</p>
                            </div>
                        </div>
                        <div className="row text-center text-md-start">
                            <div className="col-10 m-auto col-md-3">
                                <FaLocationArrow className="display-1 banner_rotate text-danger me-3"/>
                            </div>
                            <div className="col-10 mx-auto col-md-9">
                                <h2>Get Instant Tour Bookings</h2>
                                <p>as a travel industry marketer, you know your job involves a lot more than just posting some inspirational picturesque snapshots </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home2ndsec;