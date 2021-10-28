import React , {createContext} from 'react';
import useFirebase from "../hooks/useFirebase";

const authContext = createContext();

const AuthProvider = ({ children }) => {
    
    const allContext = useFirebase();
    
    return (
        <authContext.Provider value={allContext}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
export { authContext };