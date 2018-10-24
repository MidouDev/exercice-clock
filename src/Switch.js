import React from 'react';
import './Switch.css';

const Switch = () => (
    <label className="switch">
        <input type="checkbox" checked={true} />
        <span className="slider round"></span>
    </label>
)

export default Switch;