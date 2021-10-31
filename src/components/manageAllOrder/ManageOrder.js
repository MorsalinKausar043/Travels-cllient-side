import React, { useEffect, useState } from 'react';
import useGetApi from '../../hooks/useGetApi';

const ManageOrder = () => {

    const [showCart, setShowCart] = useState([]);
    const [status, setStatus] = useState("Approved");
    const { loading} = useGetApi();

    useEffect(() =>
        fetch("https://wicked-werewolf-19683.herokuapp.com/cart")
            .then(res => res.json())
            .then((data) => setShowCart(data))
        , []);
    
    const deleteClickHandle = async (id) => {
        const deletes = window.confirm("Do You Delete This Packages?");
        if (deletes)
        {
            const url = `https://wicked-werewolf-19683.herokuapp.com/cart/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
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
            const url = `https://wicked-werewolf-19683.herokuapp.com/cart/${id}`;
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
                    const remainingUsers = showCart.filter(user => user._id === id)[0];
                    remainingUsers.status = "Approved";
                    setShowCart([...showCart]);
            }
        })
        }
    };

    return (
        <>
            <div className="container py-5">
                <h2 className="fw-bold mb-5">Manage All Order :</h2>
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
                        showCart.map(crrElm => {
                            
                            return (
                                <div key={crrElm._id} class="card mb-3 mx-3" style={{maxWidth: "530px"}}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                        <img src={crrElm.src} class="w-100 h-100" alt="oder_images"/>
                                        </div>
                                        <div class="col-md-8">
                                        <div class="card-body">
                                                <h5 class="card-title">{crrElm.title}</h5>
                                                <p class="card-text fw-bold"><small>Status : </small><small style={ { color: crrElm.status === "panding" ? 'red' : 'rgb(11, 164, 224)' } } >{crrElm.status}</small></p>
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

export default ManageOrder;