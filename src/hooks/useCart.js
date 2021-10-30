import { useEffect, useState } from "react";

const useCart = () => {

    const [showCart, setShowCart] = useState([]);

    useEffect(() =>
    fetch("http://localhost:8000/cart")
            .then(res => res.json())
            .then((data) => setShowCart(data))
        , [])
    
    return showCart;
}

export default useCart;