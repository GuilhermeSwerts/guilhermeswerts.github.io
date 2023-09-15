import React from 'react';
import './index.css'

export default () => {

    const scroolToDiv = (id) =>{
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    return (
        <div className='header_container'>
            <div class="dropdown">
                <button class="dropbtn">
                    <div className='balls_container'>
                        <div />
                        <div />
                        <div />
                    </div>
                </button>
                <div class="dropdown-content">
                    <a onClick={()=> {scroolToDiv('home')}}>Início</a>
                    <a onClick={()=> {scroolToDiv('assessments')}}>Avaliações</a>
                    <a onClick={()=> {scroolToDiv('about')}}>Sobre nós</a>
                    <a onClick={()=> {scroolToDiv('register')}}>Orçamento</a>
                </div>
            </div>
        </div>
    );
}