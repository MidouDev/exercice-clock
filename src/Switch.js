import React from 'react';
import './Switch.css';

const Switch = ({isChecked,handleChange}) => (
    <div className="container">
        <div className="d-flex mx-auto">
            <div className="row m-auto">
                <label className="switch">
                    <input type="checkbox" checked={isChecked} onChange={handleChange} />
                    <span className="slider round"></span>
                </label>
                <i className="fa fa-calendar ml-2 fa-2x"></i>
            </div>
        </div>
    </div>
)

export default Switch;