import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import "./myorder.css";

const Myorder = () => {

    
    const { user: { uid } } = useAuth();
    const [showCart, setShowCart] = useState([]);
    const [status, setStatus] = useState("Approved");
    

    useEffect(() =>
        fetch("http://localhost:8000/cart")
            .then(res => res.json())
            .then((data) => setShowCart(data))
        , []);
    
    const deleteClickHandle = async (id) => {
        const deletes = window.confirm("Do You Delete This Packages?");
        if (deletes)
        {
            const url = `http://localhost:8000/cart/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = showCart.filter(user => user._id !== id);
                        setShowCart(remainingUsers);
                    }
                });
        }
    };

    const updateStatusData = id => {
        const confirmApproved = window.confirm("Do You Approved this Package!");
        if (confirmApproved)
        {
            const url = `http://localhost:8000/cart/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({status})
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0)
                {
                    alert("Your Package Approved");
            }
        })
        }
    };


    return (
        <>
            <div className="container py-5">
                <h2 className="fw-bold mb-5">Your Order :</h2>
                <div className="row">
                    {
                        showCart.filter(crrVal => crrVal.user_uid === uid).map(crrElm => {
                            return (
                                <div key={crrElm._id} class="card mb-3 mx-3" style={{maxWidth: "530px"}}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                        <img src={crrElm.src} class="w-100 h-100" alt="oder_images"/>
                                        </div>
                                        <div class="col-md-8">
                                        <div class="card-body">
                                                <h5 class="card-title">{crrElm.title}</h5>
                                                <p class="card-text"><small class="text-muted">Status : {crrElm.status}</small></p>
                                            <div className="">
                                                <button onClick={_=> deleteClickHandle(crrElm._id)} className="btn btn-danger me-3">Delete</button>
                                                <input onClick={_=>updateStatusData(crrElm._id)} type="button" className="btn btn-outline-danger" value="Approved" />
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) 
                    }
                </div>
            </div>
        </>
    );
};

export default Myorder;