import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <>
        <header>
            <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-2 col-md-2 col-sm-2 d-flex align-items-center">
                    <div className="logo">
                       <h3 className="logo">Dark Fshon</h3>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 text-right">
                  <nav className="text-right">
                      <Link to="/home">Home</Link>
                      <Link to="/cart">Cart</Link>
                      <Link to="/inventory">Inventory</Link>
                      <Link to="/account">Account</Link>
                   </nav>
                 </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;