import { useEffect , useState } from "react";

const useGetApi = () => {

    const [services, setServices] = useState([]);
    const [loading , setLoading ] = useState(true)

    const getServices = () => {
        fetch("http://localhost:8000/services")
            .then(res => res.json())
            .then(apiData => {
                if (apiData)
                {
                    setServices(apiData);
                    setLoading(false)
                }
                else
                {
                    setLoading(true)
                }
            })
    }

    useEffect(getServices, []);
    
    return {
        services,
        loading
    };
    
};

export default useGetApi;