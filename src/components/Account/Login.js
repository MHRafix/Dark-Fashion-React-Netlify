import React from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../Hooks/useAuthContext';

const Login = () => {
      const {handleGoogleSignin, handleGithubSignin} = useAuthContext();
    return (
        <div className="registration-form">
            <h2>Login Now</h2>
            <form>
                <input type="email" name="" id="" placeholder="Enter your name" /> <br /><br />
                <input type="password" name="" id="" placeholder="Enter your password" /> <br /><br />
                <input type="submit" name="" id="" value="Login" />
            </form>
            <p>Have no account? <Link to="/signup">Create account</Link></p>
            <p>---------------or---------------</p>
            <button onClick={handleGoogleSignin}>Google</button>
            <button onClick={handleGithubSignin}>Github</button>
        </div>
    );
};

export default Login;