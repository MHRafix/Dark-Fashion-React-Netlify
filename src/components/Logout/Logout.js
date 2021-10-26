import React from 'react';
import useAuthContext from '../../Hooks/useAuthContext';

const Logout = () => {
  const {handleSignOut} = useAuthContext();
    return (
        <div>
            <button onClick={handleSignOut}>Logout</button>
        </div>
    );
};

export default Logout;