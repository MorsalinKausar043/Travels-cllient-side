import React from 'react';
import useAuth from "../../hooks/useAuth";
import useCart from '../../hooks/useCart';
import "./myorder.css";
import ShowOrder from './ShowOrder';

const Myorder = () => {

    
    const { user: { uid } } = useAuth();
    const showCart = useCart();


    return (
        <>
            <div className="container py-5">
                <h2 className="fw-bold mb-5">Your Order :</h2>
                <div className="row">
                    {
                    showCart.filter(crrVal => crrVal.user_uid === uid).map(crrElm => <ShowOrder key={crrElm._id} {...crrElm}/>) 
                    }
                </div>
            </div>
        </>
    );
};

export default Myorder;