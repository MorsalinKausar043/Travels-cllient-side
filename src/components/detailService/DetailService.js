import React from 'react';
import { useParams } from 'react-router';
import useGetApi from '../../hooks/useGetApi';
import SingleDetails from './SingleDetails';

const DetailService = () => {
    const { id } = useParams();
    const {services , loading} = useGetApi();
    return (
        <>
            <div className="container py-5">
                <div className="row">
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
                        services.filter(crrVal => crrVal._id === id).map(crrElm => <SingleDetails key={crrElm._id} {...crrElm}/>)
                    }
                </div>
            </div>
        </>
    );
};

export default DetailService;