import React, { useEffect } from 'react';

export default () => {

    function animateText() {
        const phrases = [
            "AUTOMAÇÃO DE SISTEMAS",
            "CRIAÇÃO DE SOFTWARE",
            "TRANSFORMANDO CÓDIGOS EM SOLUÇÕES INTELIGENTES",
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const textElement = document.getElementById("text_typewriter");


        function type() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            textElement.textContent = currentPhrase.slice(0, charIndex);

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, 1000); // Espera após a escrita
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500); // Espera após a deleção
            } else {
                setTimeout(type, isDeleting ? 50 : 100); // Velocidade da escrita/deleção
            }
        }

        type();

    }

    useEffect(() => {
        animateText()
    }, [])

    return (<p id='text_typewriter'>
    </p>);
}