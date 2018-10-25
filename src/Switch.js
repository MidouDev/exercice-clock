import React from 'react';
import './Switch.css';
import PropTypes from 'prop-types';

const Switch = (props) => (
    <div className="container">
        <div className="d-flex mx-auto">
            <div className="row m-auto">
                <label className="switch">
                    <input type="checkbox" checked={props.isChecked} onChange={props.handleChange} />
                    <span className="slider round"></span>
                </label>
                <i className="fa fa-calendar ml-2 fa-2x"></i>
            </div>
        </div>
    </div>
)

Switch.defaultProps = {
    isChecked : true
}

Switch.propTypes = {
    isChecked : PropTypes.bool,
    handleChange : PropTypes.func
}

export default Switch;