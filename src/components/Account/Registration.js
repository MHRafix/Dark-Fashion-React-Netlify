import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="registration-form">
            <h2>Registration Now</h2>
            <form>
                <input type="email" name="" id="" placeholder="Enter your name" /> <br /><br />
                <input type="username" name="" id="" placeholder="Enter your user name" /> <br /><br />
                <input type="password" name="" id="" placeholder="Enter your password" /> <br /><br />
                <input type="password" name="" id="" placeholder="Re-enter your password" /> <br /><br />
                <input type="submit" name="" id="" value="Submit" />
            </form>
            <p>Already have an account? <Link to="/account">Login</Link></p>
            <p>---------------or---------------</p>
            <button>Google</button>
            <button>Github</button>
        </div>
    );
};

export default Registration;