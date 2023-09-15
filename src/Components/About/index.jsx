import React from 'react';
import './index.css'

export default () => {
    return (
        <div style={{marginTop:30}} id='about'>
            <div style={{textAlign:'center'}}>
                <h1>SOBRE NÓS</h1>
            </div>
            <div className='about_container'>
                <div className='about_text_container'>
                    <div className='about_text'>
                        <p>GSC TECH é uma empresa inovadora no mercado de automação que se dedica a criar soluções inteligentes para melhorar a eficiência e a comodidade em sua vida diária. Nossa equipe é composta por especialistas apaixonados por tecnologia e automação, que se esforçam para oferecer produtos e serviços de alta qualidade que atendam às necessidades de nossos clientes.</p>
                        <p>Desde 2022, temos trabalhado incansavelmente para desenvolver soluções personalizadas que simplificam processos, economizam energia e proporcionam uma experiência excepcional aos nossos clientes. </p>
                        <p>Na GSC TECH, acreditamos que a automação não se trata apenas de tecnologia, mas também de melhorar a qualidade de vida. Nossas soluções inteligentes estão presentes em lares, escritórios e indústrias, proporcionando conforto, segurança e eficiência.</p>
                    </div>
                </div>
                <div className='about_img_container'>
                    <img className='about_img' src={require('../../Images/about.jpg')} />
                </div>
            </div>
        </div>
    )
}