import { useContext } from "react";
import { AuthContext } from "../Context/ContextAuth";

const useAuthContext = () => {
    // Take auth context from context provider file 
      return useContext(AuthContext);
};

export default useAuthContext;