import React from 'react';
import './index.css'
import WriteText from '../WriteText';

export default () => {
    return (
        <div className='img_welcome_container'>
            <div className='img_welcome'>
                <h1>Bem-vindo(a) a <br/> GSC TECH</h1>
                <WriteText/>
            </div>
        </div>
    );
}