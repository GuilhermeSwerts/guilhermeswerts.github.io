import React from 'react';
import Card from '../Card';
import './index.css'

export default () => {
    return (
        <div style={{ marginTop: 20 }} >
            <div style={{ textAlign: 'center' }}>
                <h1>Feedback de nossos clientes satisfeitos</h1>
            </div>
            <div className='assessments_container'>
                <Card
                    imageUrl={require('../../Images/ba4bd1b6-6618-4db3-8a28-b64b63cd2d4d.png')}
                    title="Clara Rodrigues"
                    description={`"Estou impressionado com a empresa Gsc Tech! Sua abordagem
                    inovadora e
                    soluções eficientes estão verdadeiramente elevando os padrões da indústria. É inspirador ver
                    como eles
                    transformam desafios em oportunidades, tornando a automação uma jornada emocionante rumo à
                    excelência."
                `}
                />
                <Card
                    imageUrl={require('../../Images/ba4bd1b6-6618-4db3-8a28-b64b63cd2d4d.png')}
                    title="Sofia Silva"
                    description={`"Fiquei profundamente impressionado com a empresa GSC TECH! É incrível o trabalho deles."`}
                />
                <Card
                    imageUrl={require('../../Images/ba4bd1b6-6618-4db3-8a28-b64b63cd2d4d.png')}
                    title="Mateus Pereira"
                    description={`Gosteei muito do constrole de estoque, super recomendo o trabalho deles é verdadeiramente notável.`}
                />
            </div>
        </div>
    );
}