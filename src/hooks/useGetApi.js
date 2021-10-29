import { useEffect , useState } from "react";

const useGetApi = () => {

    const [services, setServices] = useState([])

    const getServices = () => {
        fetch("http://localhost:8000/services")
            .then(res => res.json())
            .then(apiData => setServices(apiData))
    }

    useEffect(getServices, []);
    
    return services;
    
};

export default useGetApi;