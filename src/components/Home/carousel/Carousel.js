import React from 'react';
import "./carousel.css"

const Carousel = () => {
    const first_image = "https://i.ibb.co/Y3MS9PM/images-7.jpg";
    const second_image = "https://i.ibb.co/12BKN8p/download-8.jpg";
    const third_image = "https://i.ibb.co/VLCwS8m/images-20.jpg";
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active bg-light" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" className="bg-light" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" className="bg-light" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src={second_image} className="d-block banner_image" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-light">Plan Your Trip with Trevily</h5>
                        <p className="text-light">Med Center Health offers more access to innovative healthcare. More locations. More lives made better. Right here.</p>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src={first_image} className="d-block banner_image" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-light">Welcome to Tevily Torissum!</h5>
                        <p className="text-light">Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula nibh.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={third_image} className="d-block banner_image" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-light">Phasellus at nunc orci. Donec ipsum metus,</h5>
                        <p className="text-light">Pharetra quis nunc sit amet, maximus vehicula nibh. Praesent pulvinar porta elit, a commodo erat.</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;