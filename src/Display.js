import React from 'react';
import './Display.css';

const Display = ({currentTime,currentDate,isChecked}) => (
    <div className="circle mx-auto mt-5">
        <div>
            <div className="time text-center"> {currentTime} </div>
                {
                    isChecked 
                    ?
                    <div className="date text-center"> {currentDate} </div> 
                    :
                    null
                }
        </div>
    </div>

) 
    
export default Display;