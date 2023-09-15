import React from 'react';

import './index.css'

export default (props) => {
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.title} />
            <div className="card-body">
                <p>{props.description}</p>
            </div>
            <h2>{props.title}</h2>
            <div className='star_img_container'>
                <img src={require('../../Images/estrelas.png')} alt="star" />
            </div>
        </div>
    )
}