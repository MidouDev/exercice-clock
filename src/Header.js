import React from 'react';
import './Header.css';

const Header = () => (
    <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa fa-clock-o fa-4x text-white"></i>
                <div className="h1 ml-3 my-auto text-light">React Clock</div>
            </div>
        </div>
    </nav>
)

export default Header;