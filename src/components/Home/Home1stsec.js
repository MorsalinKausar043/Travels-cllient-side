import React from 'react';
import { FaUserTie , FaHandsHelping } from 'react-icons/fa';
import { DiYeoman } from 'react-icons/di';
import { BiHappyHeartEyes } from 'react-icons/bi';
import "./home1stsec.css";

const Home1stsec = () => {
    return (
        <>
            <div className="container-fluid py-5 section_first">
                <div className="row pb-5">
                    <div className="container mx-auto px-5">
                            <div className="text-center">
                                <h4 className="section_first_title">Our Traveller Say</h4>
                                <h1 className="fw-bold mb-5">What Oue Traveller Say <br /> About Us</h1>
                            </div>
                        <div className="row d-flex justify-content-around  flex-row">
                                <div className="col-md-2 ms-md-5 bg-info text-center shadow rounded p-3">
                                    <FaUserTie className="display-2 mb-3"/>
                                    <h4 className="first_sec_body">2000+ Our worldwide guide</h4>
                                </div>
                                <div className=" col-md-2 ms-md-5 mt-3 p-3 mt-md-0 bg-info text-center shadow rounded">
                                    <FaHandsHelping className="display-2 mb-3"/>
                                    <h4 className="first_sec_body">100% trusted travel agency</h4>
                                </div>
                                <div className=" col-md-2 ms-md-5 mt-3 p-3 mt-md-0 bg-info text-center shadow rounded">
                                    <DiYeoman className="display-2 mb-3"/>
                                    <h4 className="first_sec_body">10+ year of travel experience</h4>
                                </div>
                                <div className=" col-md-2 ms-md-5 mt-3 p-3 mt-md-0 bg-info text-center shadow rounded p-3">
                                    <BiHappyHeartEyes className="display-2 mb-3"/>
                                    <h4 className="first_sec_body"> experience 90% of our traveller happy</h4>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home1stsec;