import React from 'react';
import { useParams } from 'react-router';
import useGetApi from '../../hooks/useGetApi';
import SingleDetails from './SingleDetails';

const DetailService = () => {
    const { id } = useParams();
    const services = useGetApi();
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    {
                        services.filter(crrVal => crrVal._id === id).map(crrElm => <SingleDetails key={crrElm._id} {...crrElm}/>)
                    }
                </div>
            </div>
        </>
    );
};

export default DetailService;