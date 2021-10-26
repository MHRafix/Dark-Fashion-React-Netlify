import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const ContextAuth = ({children}) => {
const allContext = useFirebase();
    return (
         <AuthContext.Provider value={allContext}>
              {children} {/* Take children from props */}
         </AuthContext.Provider>
    );
};

export default ContextAuth;