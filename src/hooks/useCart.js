import { useEffect, useState } from "react";
import axios from "axios";

const useCart = () => {

    const [showCart, setShowCart] = useState([]);

    useEffect(() =>
        fetch("http://localhost:8000/cart")
            .then(res => res.json())
            .then((data) => setShowCart(data))
        , []);
    
    const handleDeleteEvent = async (id) => {
        const deletes = window.confirm("Do You Delete This Packages?")
        if (deletes)
        {
            return axios.delete(`http://localhost:8000/cart/${id}`)
        }
    };

    console.log(showCart);
    
    return {
        showCart,
        handleDeleteEvent,
        setShowCart
    };
}

export default useCart;