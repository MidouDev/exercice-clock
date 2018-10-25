import React from 'react';
import './Display.css';
import PropTypes from 'prop-types';

const Display = (props) => (
    <div className="circle mx-auto mt-5">
        <div>
            <div className="time text-center"> {props.currentTime} </div>
                {
                    props.isChecked 
                    ?
                    <div className="date text-center"> {props.currentDate} </div> 
                    :
                    null
                }
        </div>
    </div>
) 

Display.defaultProps = {
    currentTime : '__:__:__',
    currentDate : '___ ___ __ ____',
    isChecked : true
}

Display.propTypes = {
    currentTime : PropTypes.string,
    currentDate : PropTypes.string,
    isChecked : PropTypes.bool
}
    
export default Display;