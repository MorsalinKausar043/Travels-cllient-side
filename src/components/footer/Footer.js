import React from 'react';
import { FaFacebookSquare , FaWhatsappSquare } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGoogleCircle } from 'react-icons/ai';
import "./footer.css";

const Footer = () => {

    const footer_logo = "https://i.ibb.co/BffJjtx/logo-1.png";
    const footer_image1 = "https://i.ibb.co/Y8BXNqY/download.jpg";
    const footer_image2 = "https://i.ibb.co/hFmCG56/download-1.jpg";
    const footer_image3 = "https://i.ibb.co/MSvn43V/download-2.jpg";


    return (
        <>
            <div className="container-fluid bg-dark py-5 px-2 px-md-5 text-light">           
            <div className="row">
                <div className="col-10 col-md-4 text-center order-3 order-md-1">
                    <img className="bg-light display-1" src={footer_logo} alt="footer_logo_img"/>
                    <p className="text-light">
                    <span className="text-danger display-6 fw-bold">W</span>elcome to our Trip and Tour Agency. Lorem simply text amet cing elit.There are many variations of passages of Lorem Ipsum is simply free text available in the market for you.
                    </p>
                    <div>
                        <FaFacebookSquare className=" social_icon"/>
                        <FaWhatsappSquare className=" social_icon mx-3"/>
                        <AiOutlineTwitter className=" social_icon"/>
                        <AiFillLinkedin className=" social_icon mx-3"/>
                        <AiFillGoogleCircle className=" social_icon"/>
                    </div>
                </div>
                <div className="col-10 col-md-4 my-3 my-md-0 order-1 order-md-2 mx-auto">
                    <h2 className="mb-3"><span className="text-danger fw-bold">E</span>xplore News</h2>
                    <div className="d-flex align-items-center">
                        <div className="me-2">
                            <img src={footer_image1} className="footer_image" alt="footer-img" />
                        </div>
                        <div>
                            <p className="m-0">National Park 2 Days Tour</p>
                            <span><small className="text-danger">Dec 02, 2020</small></span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center my-3">
                        <div className="me-2">
                            <img src={footer_image2} className="footer_image" alt="footer-img" />
                        </div>
                        <div>
                            <p className="m-0">Jaflong Tour 3 Days</p>
                            <span><small className="text-danger">Jun 06, 2021</small></span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="me-2">
                            <img src={footer_image3} className="footer_image" alt="footer-img" />
                        </div>
                        <div>
                            <p className="m-0">Africa Tour 2 Days</p>
                            <span><small className="text-danger">Aug 08, 2021</small></span>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-md-4 order-2 order-md-3 mx-auto my-3 my-md-0">
                    <h3><span className="fw-bold text-danger">U</span>SEFULL LINKS</h3>
                    <ul>
                        <li className="useful_list">FAQ</li>
                        <li className="useful_list">Book Appionment</li>
                        <li className="useful_list">Contact</li>
                        <li className="useful_list">Community Blog</li>
                        <li className="useful_list">Rewards</li>
                        <li className="useful_list">Work with Us</li>
                        <li className="useful_list">Account</li>
                        <li className="useful_list">Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;