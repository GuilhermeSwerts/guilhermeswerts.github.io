import React from 'react';
import './index.css'

export default (props) => {
    return (
        <div className='separator_container' id='assessments'>
            <div>
                <h1 style={{ color: '#000' }}>{props.text}</h1>
            </div>
        </div>
    );
};