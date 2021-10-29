import React from 'react';

const SingleDetails = ({_id,title,body,src , status}) => {
    return (
        <>
            <div className="col-10 mx-auto col-md-8">
                <div className="single_service_imgBox">
                    <figure>
                            <img src={src} className="w-100 rounded shadow" alt="service_details" />
                    </figure>
                </div>
                <div className="text-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2>{title}</h2>
                        <h5><small>status : {status}</small></h5>
                    </div>
                    <h4>Overview :</h4>
                    <p>{body}</p>
                </div>
                <div>
                    <button className="btn btn-danger">Approved</button>
                </div>
            </div>
        </>
    );
};

export default SingleDetails;