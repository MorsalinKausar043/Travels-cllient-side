import React from 'react';
import useGetApi from "../../../hooks/useGetApi";
import "./services.css";
import ServicesPart from './ServicesPart';


const Services = () => {
    const {services , loading} = useGetApi();
    return (
        <>
            <div className="container py-5">
                <div className="text-center">
                    <p className="service_mini_title fw-bold">Choose Your Package</p>
                    <h1 className="service_title fw-bold">Select Your Best Package <br /> For Your Travel</h1>
                </div>
                
                <div class="row row-cols-1 my-3 row-cols-md-3 g-4">
                    {
                        loading ?
                            <div className="container">
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-4 text-center">
                                        <div class="spinner-border text-danger" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                        services.map(crrElm => <ServicesPart key={crrElm._id} {...crrElm}/>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;